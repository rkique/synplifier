import os, sys
import re

f = open(os.path.join(sys.path[0],"entry.txt"), "r")
lines = f.read().splitlines()

mainLines = "\n".join(lines[1:])
mainLines = mainLines.replace("\"","'")

mainLines = mainLines.replace(" _", " <i>")
mainLines = mainLines.replace("_ ", "</i>")

mainLines = mainLines.replace(" **", "<b>")
mainLines = mainLines.replace("** ", "</b>")


print(lines)
f = open(os.path.join(sys.path[0],"terms.txt"), "a")
f.write("['"+lines[0]+"', '"+mainLines+"'],\n")
