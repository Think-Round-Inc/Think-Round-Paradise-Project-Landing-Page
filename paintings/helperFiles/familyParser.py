import os
from pathlib import Path
import re

def readPaintings(family):
    folderName = "";
    toReturn = "";
    strings= [];
    #open folder
    location = str(Path(os.path.realpath(__file__)).parent.absolute().parent.absolute()) + "\\" + family;
    paintings = sorted(os.listdir(location))
    #print(paintings)
    for i in paintings:
        paren = i[i.rfind("(")+1:i.rfind(")")];
        family = paren.split("-");
        #print(family)
        if (len(family) > 1):
            spText = i.split('.');
            text = '"' + spText[0] + '":["' + family[1].lstrip() +'"],';
            print(text)

if __name__ == "__main__":
    readPaintings("Christians");
    #readPaintings("Jews");
    #readPaintings("Muslims");
