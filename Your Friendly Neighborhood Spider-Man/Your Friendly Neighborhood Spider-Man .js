
const clickCounts = {
    Home: 0,
    Hollywood:0,
    Bollywood:0,
    Punjab:0,
    South :0,
    Web :0,
    GENREs:0,
    More:0,
    screen:0,
    Download1:0,
    Download2:0,
    Download3:0,
    Download4:0,
    Download5:0,
    Download6:0,
    Download7:0,
   }


// Function to handle clicks on Movies, Song, Game, and End
function handleClick(page) {
    clickCounts[page]++;

    // Get the page content to display
    const pageContent = document.getElementById(`${page}-page`);
    if (page === 'Home') {
        if (clickCounts.Home === 1) {
            window.open("https://www.effectiveratecpm.com/wxmmscwyjt?key=3ad7df227f55ca82acc30e205189608b.com", "_blank");
        } else if (clickCounts.Home === 2) {
            window.open('../index.html', '_blank');
            clickCounts.Home = 0;  // Reset click count for Movies
        }
    }
    if (page === 'Hollywood') {
        if (clickCounts.Hollywood === 1) {
            window.open("https://www.effectiveratecpm.com/wxmmscwyjt?key=3ad7df227f55ca82acc30e205189608b.com", "_blank");
        } else if (clickCounts.Hollywood === 2) {
            window.open('../hollywood.html', '_blank');
            clickCounts.Hollywood = 0;  // Reset click count for Movies
        }
    }
    if (page === 'Bollywood') {
        if (clickCounts.Bollywood === 1) {
            window.open("https://www.effectiveratecpm.com/wxmmscwyjt?key=3ad7df227f55ca82acc30e205189608b.com", "_blank");
        } else if (clickCounts.Bollywood === 2) {
            window.open('../bollywood.html', '_blank');
            clickCounts.Bollywood = 0;  // Reset click count for Movies
        }
    }
    if (page === 'Punjab') {
        if (clickCounts.Punjab === 1) {
            window.open("https://www.effectiveratecpm.com/wxmmscwyjt?key=3ad7df227f55ca82acc30e205189608b.com", "_blank");
        } else if (clickCounts.Punjab === 2) {
            window.open('../Punjab.html', '_blank');
            clickCounts.Punjab = 0;  // Reset click count for Movies
        }
    }
    if (page === 'South') {
        if (clickCounts.South === 1) {
            window.open("https://www.effectiveratecpm.com/wxmmscwyjt?key=3ad7df227f55ca82acc30e205189608b.com", "_blank");
        } else if (clickCounts.South === 2) {
            window.open('../south.html', '_blank');
            clickCounts.South = 0;  // Reset click count for Movies
        }
    }
    if (page === 'Web') {
        if (clickCounts.Web  === 1) {
            window.open("https://www.effectiveratecpm.com/wxmmscwyjt?key=3ad7df227f55ca82acc30e205189608b.com", "_blank");
        } else if (clickCounts.Web  === 2) {
            window.open('../web.html', '_blank');
            clickCounts.Web = 0;  // Reset click count for Movies
        }
    }
    if (page === 'GENREs') {
        if (clickCounts.GENREs === 1) {
            window.open("https://www.effectiveratecpm.com/wxmmscwyjt?key=3ad7df227f55ca82acc30e205189608b.com", "_blank");
        } else if (clickCounts.GENREs === 2) {
            window.open('../movies.html', '_blank');
            clickCounts.GENREs = 0;  // Reset click count for Movies
        }
    }
    if (page === 'More') {
        if (clickCounts.More === 1) {
            window.open("https://www.effectiveratecpm.com/wxmmscwyjt?key=3ad7df227f55ca82acc30e205189608b.com", "_blank");
        } else if (clickCounts.More === 2) {
            window.open('../movies.html', '_blank');
            clickCounts.More = 0;  // Reset click count for Movies
        }
    }
    if (page === 'Download1') {
        if (clickCounts.Download1 === 1) {
            window.open("https://www.effectiveratecpm.com/wxmmscwyjt?key=3ad7df227f55ca82acc30e205189608b.com", "_blank");
        } else if (clickCounts. Download1 === 2) {
            window.open('Your Friendly Neighborhood Spider-Man 1.html', '_blank');
            clickCounts. Download1 = 0;  // Reset click count for Movies
        }
    }
    if (page === 'Download2') {
        if (clickCounts.Download2 === 1) {
            window.open("https://www.effectiveratecpm.com/wxmmscwyjt?key=3ad7df227f55ca82acc30e205189608b.com", "_blank");
        } else if (clickCounts. Download2 === 2) {
            window.open('Your Friendly Neighborhood Spider-Man 2.html', '_blank');
            clickCounts. Download2 = 0;  // Reset click count for Movies
        }
    }
    if (page === 'Download3') {
        if (clickCounts.Download3 === 1) {
            window.open("https://www.effectiveratecpm.com/wxmmscwyjt?key=3ad7df227f55ca82acc30e205189608b.com", "_blank");
        } else if (clickCounts. Download3 === 2) {
            window.open('Beast Games (Season 1)3.html', '_blank');
            clickCounts. Download3 = 0;  // Reset click count for Movies
        }
    }
    if (page === 'Download4') {
        if (clickCounts.Download4 === 1) {
            window.open("https://www.effectiveratecpm.com/wxmmscwyjt?key=3ad7df227f55ca82acc30e205189608b.com", "_blank");
        } else if (clickCounts. Download4 === 2) {
            window.open('Beast Games (Season 1)4.html', '_blank');
            clickCounts. Download4 = 0;  // Reset click count for Movies
        }
    }
    if (page === 'Download5') {
        if (clickCounts.Download5 === 1) {
            window.open("https://www.effectiveratecpm.com/wxmmscwyjt?key=3ad7df227f55ca82acc30e205189608b.com", "_blank");
        } else if (clickCounts. Download5 === 2) {
            window.open('Beast Games (Season 1)5.html', '_blank');
            clickCounts. Download5 = 0;  // Reset click count for Movies
        }
    }

    if (page === 'Download6') {
        if (clickCounts.Download6 === 1) {
            window.open("https://www.effectiveratecpm.com/wxmmscwyjt?key=3ad7df227f55ca82acc30e205189608b.com", "_blank");
        } else if (clickCounts. Download6 === 2) {
            window.open('Beast Games (Season 1)6.html', '_blank');
            clickCounts. Download6 = 0;  // Reset click count for Movies
        }
    }
    if (page === 'Download7') {
        if (clickCounts.Download7 === 1) {
            window.open("https://www.effectiveratecpm.com/wxmmscwyjt?key=3ad7df227f55ca82acc30e205189608b.com", "_blank");
        } else if (clickCounts. Download7 === 2) {
            window.open('Beast Games (Season 1)7.html', '_blank');
            clickCounts. Download7 = 0;  // Reset click count for Movies
        }
    }
       if (page === 'screen') {
        if (clickCounts.screen === 1) {
            window.open("https://www.effectiveratecpm.com/wxmmscwyjt?key=3ad7df227f55ca82acc30e205189608b.com", "_blank");
        } else if (clickCounts. screen === 2) {
            window.open('movies.html', '_blank');
            clickCounts. screen = 0;  // Reset click count for Movies
        }
    }
}
        // When the thumbnail is clicked, show the video player
        document.getElementById("thumbnail").addEventListener("click", function() {
            // Hide the thumbnail image
            document.getElementById("thumbnail").style.display = "none";
            
            // Show the video player
            document.getElementById("videoPlayerContainer").style.display = "block";
            
            // Play the video
            const video = document.getElementById("videoPlayer");
            video.play();
        });
        function toggleMenu() {
            const nav = document.getElementById('content');
            nav.classList.toggle('show');
          }