var tablinks = document.getElementsByClassName("tab-links");
        var tablinks = document.getElementsByClassName("tab-contents");

        function opentab(tabname){
            for(tab-link of tablinks){
                tab-links.classlist.remove("active-link");
            }
            for(tab-link of tablinks){
                tabcontent.classlist.remove("active-tab");
            }
            event.currentTarget.classlist.add("active-link");
            document.getElementById(tabname).classList.add("active-tab");}

            var sidemenu = document.getElementById("sidemenu");
            function openmenu(){
                sidemenu.style.right = "0";

            }
            function closemenu(){
                sidemenu.style.right = "-200px";
                
            }