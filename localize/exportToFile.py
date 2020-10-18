import xlrd
import os
import json

delete = False

def export(path):
    wb = xlrd.open_workbook(path.inPath)
    sheet = wb.sheet_by_index(0)

    print("remove all old loclaize file")

    commandDelete =  " && del /Q /F *"
    commandMove = " && move /y  *.* " + path.outOldPath
    if (delete):
        command = ("cd " + path.outPath + commandDelete)
    else:
        command = ("cd " + path.outPath + commandMove)
    print(command)
    os.system(command)
    
    langFile = []
    langObj = []

    for l in range(1, sheet.ncols):
        lang = sheet.cell_value(0, l)
        langFile.append(path.outPath + lang + ".json")

    for l in range(len(langFile)):
        langFile[l] = open(langFile[l], "w", encoding="utf-8")
        langObj.append({})


    for loc in range(1, sheet.nrows):
        for l in range(len(langFile)):
            key = sheet.cell_value(loc, 0).strip()
            value = sheet.cell_value(loc, l+1).strip()
            langObj[l][key] = value
    
    for l in range(0, len(langFile)):
        json.dump(langObj[l], langFile[l], ensure_ascii=False, indent=4, separators=(',', ': '))

    for l in langFile:
        l.close()