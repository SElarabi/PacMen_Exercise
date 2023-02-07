<!-- @format -->

# PacMen-Exercise
Visit site: https://selarabi.github.io/PacMen_Exercise/ 

## Description ##
<p>
This project is a demo website that showcases a JavaScript game and can be considered as an exercise to learn how to dynamically inject content into a web page using JavaScript.
</p>

## How to Run ##
### Main display and pacmen.js
<p>
 - The website includes a navbar with links to other pages, buttons to add PacMan, Move,stop and reset are element for user interaction with pacman elements.<br> 
 The game itself is displayed in a container on the page, and uses HTML and CSS for the visual elements.
 - The add button will add pacman character each time user hit the button.
- Start would make added charcters to start moving and bouncing inside the display. Each character would change direction each time it hits the frame sides of the display container.The characters would accelerate when Move button is pressed.
 - Stop would freeze all pacman characters running in the display.
 - Reset would clear display and allow to start new characters.

</p>
<p>
The JavaScript code in pacmen.js file consist of creating and controling components that interact with the HTML elements to create a dynamic game experience where the position of the elements on the screen updates in real-time .
</p>

### Navigation bar 
The navigation bar has 2 elements (Portfolio and Project sites ) which allow to navigate and explore other projects  their repositories and their sites.<br>
This website was built using bootsrap styling with other defined styling included in style.css file.
      
</p>
Bootstrap CSS and JS files are accessible using the following CDN links references without the need for downloading the files and include them in the project files. 
<p>
Bootstrap CSS link 
      
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css"
      rel="stylesheet"
      integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65"
      crossorigin="anonymous"/>
   
      
<p/>

  Bootstrap JS and popper, the order in wich the bootstrap javascript are called is:  Popper.js, then Bootstrap JS
  
    <script
      src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.6/dist/umd/popper.min.js"
      integrity="sha384-oBqDVmMz9ATKxIep9tiCxS/Z9fNfEXiDAYTujMAeBAsjFuCZSmKbSSUnQlmh/jp3"
      crossorigin="anonymous"
    ></script>
    <script
      src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.min.js"
      integrity="sha384-cuYeSxntonz0PPNlHhBs68uyIAVpIIOZZ5JqeqvYYIcEL727kskC66kF92t6Xl2V"
      crossorigin="anonymous">
    </script>
  
  
##  Roadmap of future improvements ##

- Modify code to allow the pacman character to change face direction.
- Fix the stop option and allow to resume pacman carachters  movement when user hits move again.

## MIT License ##

<p>Copyright (c) 2023 Eddie Larabi</p>

<p>
Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

</p>
