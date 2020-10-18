import getInOut;
import exportToFile;

print("start export localize")
inOutPath = getInOut.getInOut()
print("get in out config complete")
print("start export to file")
exportToFile.export(inOutPath)
print("export complete")