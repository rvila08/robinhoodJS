from queue import Empty
import robin_stocks.robinhood as r
import pyotp
import sys
from robin_stocks.robinhood.helper import *
from robin_stocks.robinhood.urls import *
import numpy as np
import pprint
import datetime

login = r.login('rvila@chapman.edu','ShcpIrish08')

def get_option_market_data(inputSymbols, expirationDate, strikePrice, optionType, info = None):
    """Returns the option market data for the stock option, including the greeks,
    open interest, change of profit, and adjusted mark price.

    :param inputSymbols: The ticker of the stock.
    :type inputSymbols: str
    :param expirationDate: Represents the expiration date in the format YYYY-MM-DD.
    :type expirationDate: str
    :param strikePrice: Represents the price of the option.
    :type strikePrice: str
    :param optionType: Can be either 'call' or 'put'.
    :type optionType: str
    :param info: Will filter the results to get a specific value.
    :type info: Optional[str]
    :returns: Returns a dictionary of key/value pairs for the stock. \
    If info parameter is provided, the value of the key that matches info is extracted.

    """
    try:
        symbols = inputs_to_set(inputSymbols)
        if optionType:
            optionType = optionType.lower().strip()
    except AttributeError as message:
        print(message, file= get_output())
        return [None]

    data = []
    for symbol in symbols:
        optionID = id_for_option(symbol, expirationDate, strikePrice, optionType)
        marketData = r.options.get_option_market_data_by_id(optionID)
        data.append(marketData)

    return(filter_data(data, info))

def returnOptionsInfo(data):

    allOptions = []
    optionIDs = []

    for x in range(len(data)):
        if data[x].get('state') == 'filled':
            url = data[x].get('legs')[0].get('option')
            id = url.replace('https://api.robinhood.com/options/instruments/','')
            optionIDs.append(id)

    x = np.array(optionIDs)
    uniqueOptionIds = np.unique(x)

    print(len(uniqueOptionIds))


    for x in uniqueOptionIds:
        option = r.options.get_option_instrument_data_by_id(x)
        allOptions.append(option)  

    return allOptions

def returnGreeks(data):

    list = data[0][0]

    #return list.get('theta')
    return list

def returnGreeksFilter(data,delta):

    allOptions = []

    print(data)

    for x in data:
        
        if x != 'Empty':
            print('FOUND')
            option = r.options.get_option_market_data_by_id(x.get('id'))
            print(option)
            if float(option.get('delta')) > delta:
                allOptions.append(option)
        else:
            data.remove(x)

    
    #extract symbol, exp, strikeprice, option type 
    # feed into get_option_instrument_data() 
    # if expiration is valid

    print(len(allOptions))

    return allOptions


def returnValidOptions(data):
    
    validOptions = []
    for x in data:
        option = compareExpiration(x,x.get('expiration_date'))
        validOptions.append(option)
        print('option appended')
    
    return validOptions
 
def compareExpiration(optionData, expDate):
    
    #currentDate = datetime.datetime.today()
    currentDate = datetime.datetime(2022, 5,9)

    if currentDate < datetime.datetime.strptime(expDate,"%Y-%m-%d"):
        return optionData
    else:
        return 'Empty'

def main():
    #print(returnGreeks(get_option_market_data("TSLA","2022-05-13","880","Call")))
    #print(returnGreeksFilter(returnValidOptions(returnOptionsInfo(r.options.get_market_options()),),0))
    #print(compareExpiration(''))
    #print(returnOptionsInfo(r.options.get_market_options()))
    print("hi")


if __name__ == "__main__":
    main()


#write a function that compares the expiration date to the current date

