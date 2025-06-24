import os
from pathlib import Path
import re

def sortingFunction(a,b):
    aSplit = a.split('.')[0];
    bSplit = b.split('.')[0];
    print(aSplit);
    print(bSplit);

def readPaintings(family):
    folderName = "";
    toReturn = "";
    strings= [];
    #open folder
    location = str(Path(os.path.realpath(__file__)).parent.absolute().parent.absolute()) + "\\" + family;
    print(location)
    paintings = sorted(os.listdir(location))
    #print(paintings)
    #sortingFunction(paintings[0],paintings[1]);
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

def writeToFile(fileName):
    return;

if __name__ == "__main__":
    #readPaintings("Christians");
    readPaintings("Jews");
