
import urllib.request, json

github_link = "https://github.com/fburdell/fburdell.github.io/blob/master/blogs/blog.json"

with urllib.request.urlopen(github_link) as url: 
    print( json.loads( url.read().decode() ))
    #print( json.loads(url.read().decode()) ) 

