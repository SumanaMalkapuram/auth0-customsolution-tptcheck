Third party cookie check for browsers
=====================================

A simple way of checking if third party cookies are enabled in a browser.
Consists of a script -  that will set a cookie and will post a message depending on if the
cookie is present or not. 

Deploy the script on different domain from the main application (calling application), then load it similar to the 
example below:


````
body>
    <script type="text/javascript">
        var receiveMessage = function (evt) {
        if (evt.data === 'tpc-no') {
            console.log('third party cookies are not supported');
        } else if (evt.data === 'tpc-yes') {
            console.log('third party cookies are supported');
        }
        };
        window.addEventListener("message", receiveMessage, false);
    </script>
    <iframe src="CROSS-DOMAIN.B/tpt-check.html" style="display: none" />
</body>
````
Calling server.js is another option, if there are specific headers to be set on the response.

It's also a good idea to set up a timeout that will automatically label third party cookies as unsupported if no recognised event comes back
after a while, just in case network fails. 


