import csv 
with open('audio.csv', newline='') as csvfile:
    audioreader = csv.reader(csvfile)
    next(audioreader)
    for row in audioreader:
        fileName = row[4] + "-" + row[3] + ".md"
        f = open(fileName, "w")
        f.write("---\n")
        f.write("year: " + row[4] + "\n")
        f.write("parasha: " + row[6] + "\n")
        f.write("bookcode: \"" + row[3][0] + "\"\n")
        f.write("fullparashacode: \"" + row[3] + "\"\n")
        f.write("parashacode: \"" + row[3][0:3] + "\"\n")
        f.write("title: " + row[8] + "\n")
        f.write("author: Rabbi Eliezer Hirsch\n")
        f.write("date: " + row[7] + "\n")
        f.write("id: " + row[2] + "\n")
        f.write("filename: " + row[1] + "\n")
        f.write("layout: audio\n")
        f.write("moment: " + row[9] + "\n")
        f.write("shabbat: " + row[10] + "\n")
        f.write("occasion: " + row[11] + "\n")
        f.write("---\n")
        f.close()
