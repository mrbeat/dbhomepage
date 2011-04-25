
"""
Markup Template Inserter

python mti.py arg1 arg2 arg3a arg3b argNa argNb

arg1 = output file
arg2 = input directive file
arg3a-argNa = name of directive 
arg3b-argNb = corresponding file to insert at arg3a

"""

import sys
import getopt

tree = {}
argarr = sys.argv[1:]
final = ""

endfile = open(argarr.pop(0), "w")
directivefile = open(argarr.pop(0), "r")
template = open("template", "r")

directivearr = directivefile.read().split('%MTI ')
directives = {}

# parse out the directive
for line in directivearr:
    if line[0:3] == "%% ":
        arr = line.split('\n', 1)
        directive = arr[0][3:]
        directives[directive] = arr[1]
            
# get the trailing extra directives and corresponding files
while len(argarr) > 0:
    tree[argarr.pop(0)] = open(argarr.pop(1), "r")

# put it in!
for line in template:
    final = final + line
    if line.rfind("<!--MTI") != -1:
        keyword = line.split(' ')[1]
        if keyword in tree:
            for l in tree[keyword]:
                final = final + l
        elif keyword in directives:
            for l in directives[keyword]:
                final = final + l


print final
endfile.write(final)

# close files
for f in tree:
    tree[f].close()
    
template.close()
directivefile.close()
endfile.close()


