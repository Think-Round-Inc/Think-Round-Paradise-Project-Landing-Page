import os
from pathlib import Path
import re

def readPaintings(family):
    folderName = "";
    toReturn = "";
    strings= [];
    #open folder
    location = str(Path(os.path.realpath(__file__)).parent.absolute().parent.absolute()) + "\\" + family;
    #print(location)
    paintings = sorted(os.listdir(location))
    #print(paintings)
    # for file in folder add to strings
    for i in paintings:
        spText = i.split('.');
        text = '"' + spText[0] + '":["' + i +'"],';
        print(text)
    #sorted dictionary
    #join strings
    #close folder
    print(','.join(strings));
    return toReturn;

if __name__ == "__main__":
    #readPaintings("Christians");
    #readPaintings("Jews");
    readPaintings("Muslims");
