import json

fileSrc = "localize.xlsx"
pathConf = "path.json"

class InOutLang():
    def __init__(self, inPath, outPath, outOldPath):
        self.inPath = inPath
        self.outPath = outPath
        self.outOldPath = outOldPath
    

def getInOut():
    with open(pathConf) as json_file:
        listLang = []
        data = json.load(json_file)
        return InOutLang(data["in"], data["out"], data["outOldPath"])