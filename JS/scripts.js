$(document).ready(function () {

    function getRandomNumber(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    var windowHeight = $(window.height);

    function makeBird() {
        return {
            birdId: null,
            birdSize: null,
            movementRatio: null,
            topOffset: null,
            bounceRate: null,
            addBird: function() {
                var _newBird = document.createElement('img');
                _newBird.src = 'assets  /kisspng-flappy-bird-min.png';
                _newBird.className = 'bird';
                _newBird.id = this.birdId;

                _newBird.style.width = this.birdSize + 'px';
                _newBird.style.left = this.birdSize + 'px';
                _newBird.style.top = this.topOffset + '%';
                _newBird.style.filter = 'hue-rotate(' + getRandomNumber(0, 359) + 'deg)';

                document.body.appendChild(_newBird);
                
            },
            fly: function(scrollDistance) {
                document.getElementById(this.birdId).style.left = this.birdSize + scrollDistance / this.movementRatio + 'px';

                if (!$('#' + this.birdId).is(':animated')) {
                    $('#' + this.birdId).animate({ 'top': '+=100px' }, this.bounceRate).animate({ 'top': '-=100px' }, this.bounceRate);
                }               
            },
            init: function() {
                this.topOffset = getRandomNumber(10, 50);
                this.movementRatio = getRandomNumber(10, 50);
                this.birdId = 'bird_' + getRandomNumber(100, 999);
                this.birdSize = getRandomNumber(10, 275);
                this.bounceRate = getRandomNumber(100, 300);
                this.addBird();
            }
        };
    }

    function makePipe() {
        return {
            pipeId: null,
            pipeSize: null,
            pipeLeft: null,
            movementRatio: null,
            flip: false,
            addPipe: function() {
                var _newPipe = document.createElement('img');
                _newPipe.src = 'assets  /flappy-bird-pipe-png-2-transparent-min.png';
                _newPipe.id = this.pipeId;
                _newPipe.style.height = this.pipeSize + 'px';
                _newPipe.style.left = this.pipeLeft + 'px';

                if (this.flip) {
                    _newPipe.style.top = 0;
                    _newPipe.style.transform = 'rotate(180deg)';
                } else {
                    _newPipe.style.top = '801.11' - this.pipeSize + 'px';
                }

                document.body.appendChild(_newPipe);
            },
            moveRight: function(scrollDistance) {
                document.getElementById(this.pipeId).style.left = this.pipeLeft + scrollDistance / this.movementRatio + 'px';
            },
            init: function(flip) {
                this.pipeId = 'pipe_' + getRandomNumber(1, 999);
                this.pipeSize = getRandomNumber(150, 375);
                this.movementRatio = this.pipeSize / 10;
                this.pipeLeft = getRandomNumber(50, 2000);
                this.flip = (flip === true);
                this.addPipe();
            }
        }
    }

    var bird1 = makeBird(),
        bird2 = makeBird(),
        bird3 = makeBird(),
        bird4 = makeBird();

    bird1.init();
    bird2.init();
    bird3.init();
    bird4.init();

    var pipe1 = makePipe(),
        pipe2 = makePipe(),
        pipe3 = makePipe(),
        pipe4 = makePipe(),
        pipe5 = makePipe(),
        pipe6 = makePipe(),
        pipe7 = makePipe(),
        pipe8 = makePipe(),
        pipe9 = makePipe(),
        pipe10 = makePipe();
    
    pipe1.init(true);
    pipe2.init();
    pipe3.init(true);
    pipe4.init(true);
    pipe5.init();
    pipe6.init(true);
    pipe7.init(true);
    pipe8.init();
    pipe9.init(true);
    pipe10.init();

    $(window).scroll(function (event) {
        var offset = $(window).scrollTop();

        var imgX = offset / 50;

        console.log(imgX);

        $('#background').css('background-position', imgX + 'px 0px');
        bird1.fly(offset);
        bird2.fly(offset);
        bird3.fly(offset);
        bird4.fly(offset);
        pipe1.moveRight(offset);
        pipe2.moveRight(offset);
        pipe3.moveRight(offset);
        pipe4.moveRight(offset);
        pipe5.moveRight(offset);
        pipe6.moveRight(offset);
        pipe7.moveRight(offset);
        pipe8.moveRight(offset);
        pipe9.moveRight(offset);
        pipe10.moveRight(offset);
        
        $(document).on('click', flyUp);

        function flyDown() {
            $('#bird').attr('style', 'transform: rotate(45deg)');
            $('#bird').animate({'top': '+=100px'}, 500);
        }

        function flyUp() {
            $('#bird').animate({'top': '-=100px'}, 500);
            flyDown();
        }
    });
});    