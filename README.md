# dsf-stable-diffusion
A Dockerized local stable diffusion with Angular UI

# Instructions
- Install [Docker Desktop](https://www.docker.com/products/docker-desktop/)

- Make sure *Docker Desktop* is running

- [Clone](https://docs.github.com/en/repositories/creating-and-managing-repositories/cloning-a-repository) this repository
  - NOTE: When cloning this repository to your local drive, please make a note WHERE you cloned the files (ex. ~/Documents/dsf-stable-diffusion)

>  ## MAC OSX
>  - Open a [Terminal](https://support.apple.com/guide/terminal/open-or-quit-terminal-apd5265185d-f365-44cb-8b09-71a064a42125/mac)
>   - In the Terminal window, change to the directory where you cloned the project
>     - ex. `cd ~/thefolder/where/you/cloned/dsf-stable-diffusion`
> - Start up LocalAI by entering the following command
>    - `docker compose up --build -d`
>  - After a few seconds, open a browser to [http://localhost:4200](http://localhost:4200)
>  - Have fun making images!

> ## WINDOWS
>   - Open [Powershell](https://learn.microsoft.com/en-us/powershell/scripting/install/installing-powershell-on-windows?view=powershell-7.3)
>     - WIN Key + R
>     - type in `powershell`
>     - press enter
>     - This should open a powershell window
>   - In the Powershell window, change to the directory where you cloned the project
>     - `cd ~/thefolder/where/you/cloned/dsf-stable-diffusion`
> - Start up LocalAI by entering the following command
>    - `docker compose up --build -d`
>  - After a few seconds, open a browser to [http://localhost:4200](http://localhost:4200)
>  - Have fun making images!