import os

old_string = """joe"""
new_string = """mama"""

only_allowed_file_type = "joemama.eidjfivskhdgfkhfb"

rootdir = os.getcwd() + "/projects/fumo-in-minecraft/"

for subdir, dirs, files in os.walk(rootdir):
    for file in files:
        if (not (".py" in file or ".zip" in file or ".png" in file or ".gif" in file or ".ico" in file or ".xlsx" in file)) and (only_allowed_file_type in file):
            print(subdir.split("/")[-1] + "/" + file)
            path = os.path.join(subdir, file)
            with open(path,"r+",encoding="utf8") as f:
                lines = f.readlines()
                for i in range(len(lines)):
                    lines[i] = lines[i].replace(old_string, new_string)
                f.truncate(0)
                f.seek(0)
                f.writelines(lines)
            #print(lines)