# Simple GitHub scraper

This is a template repository for a simple [GitHub scraper](https://simonwillison.net/2020/Oct/9/git-scraping/) pioneered by Simon Wilson.

## The 'simple' part

At this point the template only supports very simple fetching and committing of a JSON data file from somewhere on the internet.

Replace `https://www.example.com/data.json` in the [.github/workflows/scrape.yaml] file with the URL of the data you want to scrape.

Commit and push the repo to GitHub and you're ready to go.

By default the scraper will run [once per week](https://crontab.guru/#6_16_*_*_0), but you can change the cron schedule in the [.github/workflows/scrape.yaml] file.

Data is stored in [data.json].