'use strict';
const game =
{
    title:"",
    isRunning: false,
    currentScreen: document.getElementsByClassName("screen active-screen")[0].id,

    toggleGame: function() 
    {
        this.isRunning = !this.isRunning;
    }
}