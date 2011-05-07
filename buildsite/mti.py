
"""
Markup Template Inserter

python mti.py [output] [template] [directivefile] [directivename] [directivenamefile]

output = output file
template = template file
directivefile = input directive file
directivename = name of directive
directivenamefile = corresponding file to insert at directivename

"""

import sys
import getopt

tree = {}
argarr = sys.argv[1:]
final = ""

endfile = open(argarr.pop(0), "w")
template = open(argarr.pop(0), "r")
directivefile = open(argarr.pop(0), "r")


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


#print final
endfile.write(final)

# close files
for f in tree:
    tree[f].close()
    
template.close()
directivefile.close()
endfile.close()

print "MTI done building site, Sir."
