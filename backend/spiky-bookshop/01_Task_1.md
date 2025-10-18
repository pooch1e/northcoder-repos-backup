# Create a new database for the bookshop
You have been tasked with modernising your local bookshop's inventory records! 

In `bookshop.sql`, create a new database, give it a sensible name.

Make sure that you can run this file several times. While you can run psql commands in the terminal, for today's sprint you should be running each file with psql. You can use > to pipe the output to a file.
```
psql -f bookshop.sql                        // runs the file with an output in the terminal
psql -f bookshop.sql > output.txt           // creates an output.txt file with the output saved as text
```

Connect to this database before continuing.

> Hint: Consider how to structure your files. Working in just one file will run every query each time that file is executed. If you separate concerns into individual files, consider what information must be included in each and do you need to run another file first to get your desired outcome.
