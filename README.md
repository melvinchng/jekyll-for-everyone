# Jekyll For Everyone

Jekyll For Everyone is a package that is designed for everyone. The package contains three major components: homepage, CV, and [Gitbook](http://www.gitbook.com). The index page is a strip down version of [Jekyll Uno](https://github.com/joshgerdes/jekyll-uno) while the CV a modification of [Online CV](https://github.com/sharu725/online-cv). However, [Legacy Gitbook (v3.2.3)](https://github.com/GitbookIO/gitbook) is used instead of modern Gitbook (v4+). The main reason of using it is due to the fact that users can own their source code and edit them locally instead of doing it on the cloud. 

This package is very user friendly for non-programmer as I reorganized all the files and have all the variables written in several data files. This make it them to edit without needing to go into the actual code. 

Big thanks to the theme creator as it this project would not be possible without their hard work! You are always welcome to contribute to this repository to make it better!

**Story Behind The Project**

The main purpose of this project is to allow everyone especially for non-programmer to own a website and platform to share their expertise without needing to worry about the cost of owning and maintaining their website. I heard from a lot of readers mentioning that they are in love with the simplicity of my website especially and would love to one one. They only reason that stops them from doing it is they do not have any programming experience and not a tech savvy. With that, this motivates me to write a complete tutorial on how to get started with [Jekyll](http://melvinchng.github.io/jekyll). 

Also, as a fresh graduate, I see the importance of owning a personal website when it comes to job hunting. If you love this project and would like to support it, spread the message and keep the footer as in. 

**Example Site**
- My Personal Website
  - [Melvin's landing page](https://melvinchng.github.io)
  - [Melvin's CV](https://melvinchng.github.io/cv)
  - [Melvin's Ruby on Rails Tuturial](https://melvinchng.github.io/rails)
- Jekyll For Everyone Sample Website
  - [Landing page](https://jekyll-for-everyone.github.io)
  - [CV](https://jekyll-for-everyone.github.io/cv)
  - [Gitbook](https://melvinchng.github.io/gitbook)

_Note: The content in `jekyll-for-everyone` is for illustration purpose only. It may not contain accurate information._

## Features
### Index Page
- Name
- Title Line
- Secondary Information Line
- Links to social pages
- Links to other pages
### CV
- Summary or Background
- Education
- Experiences
- Individual Projects
- Group Projects
- Skill & Proficiency
- Related Courses
- Honors & Awards
- Languages
- Social Link
- Volunteer Experiences
### Gitbook
- Sample Gitbook

## Installation
### If you do not know what you are doing
1. Refer to my [guide](http://melvinchng.github.io/jekyll). It contains single instructions that you need to follow to get started.
### If you know what you are doing or somewhat know what to do
**Jekyll**
1. For first time user, you have to install Ruby and Rails. If you do not have Ruby installed, you may follow [this tutorial](http://melvinchng.github.io/rails/RubyOnRailsInstallation.html) that I wrote for Windows, Linux, and MacOS (installation videos are included).
2. Install Jekyll by using the command `gem install jekyll`.
3. Then, install Jekyll Sitemap and Jekyll SEO gems by using the command `gem install jekyll-sitemap` and `gem install wdm`.
4. Start your localhost server by using the command `jekyll serve`. Make sure that you are at the root directory of your folder before using this command.
5. Your site should be accessible at `localhost:4000`.
6. For additional information about Jekyll, refer to the [official website](http://jekyllrb.com/). 

**Gitbook**
1. For first time user, you have to Gitbook modules by using the command `npm install gitbook-cli -g`.
2. Navigate to the root directory of the gitbook, `gitbook_source_code` and start the gitbook server using the command `gitbook serve`. 
3. If there are missing some packages for gitbook, use the command `gitbook install`.
4. Your site should be accessible at `localhost:4000`.
5. For additional information about Gitbook, refer to the [official website](https://github.com/GitbookIO/gitbook). 

## How To Use
### Index Page
- The stylesheet, scripts, javascript for the index pages are stored at `/index_style/`.
- The background picture for index page, named as `background-cover.jpg` can be found and replaced at `index_style/images`.
- The profile picture for index page and cv page, named as `profile.png` can be found and replaced at `assets/images`.
- All the data that shown in the index page are stored in `/_data/index_page.yml`. Replace all the content in the files.

### CV
- The stylesheet, scripts, javascript for the cv pages are stored at `/assets/`.
- All the data that shown in the cv are stored in `/_data/cv_NAME.yml`. Replace all the content in the files.
- If you would like to remove a specific section in the cv, change the variable from `true` to `false` for the variable in `/_data/cv_enable_section.yml`.

### Gitbook
- If you are not going to use the Gitbook feature, remove the `gitbook` folder.
- The source code is stored at `/gitbook_source_code`
- The content of generated book is coped from `/gitbook_source_code/_book` to `/gitbook`.

### Other
- If you would like to replace the website icon, you can use [this](https://favicon.io/) website to create one and replace the downloaded icon at `favicon.io`.
- Update the variable in `/_config.yml`. Remember to replace the `url` variable with your actual URL.
- If you would like to use Google Analytics, add your tracking number to `/_config.yml`.

## Enjoy!

As a reminder, if you love this project and would like to support it, spread the message and keep the footer as in. 
