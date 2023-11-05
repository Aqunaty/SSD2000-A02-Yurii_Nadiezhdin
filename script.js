'use strict';

$(document).ready(function () {
    const game = {
        title: "Assignment 02 - Green Mode",
        isRunning: false,
        currentScreen: "splashScreen",

        init: function () {
            this.updateTitle();
            this.setupEventListeners();
            this.switchScreen(this.currentScreen);
        },

        updateTitle: function () {
            $(".header").text(this.title);
        },

        switchScreen: function (currentScreen) {
            $(".screen").removeClass("active-screen");
            $("#" + currentScreen).addClass("active-screen");
        },

        toggleRunning: function () {
            this.isRunning = !this.isRunning;
            const playPauseButton = $("#playPause");
            if (this.isRunning) {
                playPauseButton.text("Pause");
                $(".game").text("GAME IS RUNING")
            } else {
                playPauseButton.text("Play");
                $(".game").text("GAME IS PAUSED")
            }
        },

        setupEventListeners: function () {
            $("#startGame").click(function () {
                game.currentScreen = "gameScreen";
                game.switchScreen(game.currentScreen);
            });

            $("#endGame").click(function () {
                game.currentScreen = "gameOverScreen";
                game.switchScreen(game.currentScreen);
            });

            $("#playPause").click(function () {
                game.toggleRunning();
            });

            $("#playAgain").click(function () {
                game.currentScreen = "gameScreen";
                game.switchScreen(game.currentScreen);
            });

            $("#quit").click(function () {
                game.currentScreen = "splashScreen";
                game.switchScreen(game.currentScreen);
            });
        },
    };

    game.init();
});