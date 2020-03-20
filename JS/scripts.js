$(document).ready(function () {

	var windowHeight = $(window).height();

    function getRandomNumber(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

	function Bird() {
		this.birdId = null;
		this.birdSize = null;
		this.movementRatio = null;
		this.topOffset = null;
		this.bounceRate = null;
		this.addBird = function() {
			var _newBird = document.createElement('img');
			_newBird.src = 'assets  /kisspng-flappy-bird-min.png';
			_newBird.className = 'bird';
			_newBird.id = this.birdId;

			_newBird.style.width = this.birdSize + 'px';
			_newBird.style.left = this.birdSize + 'px';
			_newBird.style.top = this.topOffset + '%';
			_newBird.style.filter = 'hue-rotate(' + getRandomNumber(0, 359) + 'deg)';

			document.body.appendChild(_newBird);
		};
		this.fly = function(scrollDistance) {
			document.getElementById(this.birdId).style.left = this.birdSize + scrollDistance / this.movementRatio + 'px';

			if (!$('#' + this.birdId).is(':animated')) {
				$('#' + this.birdId).animate({ 'top': '+=100px' }, this.bounceRate).animate({ 'top': '-=100px' }, this.bounceRate);
			}
		};	
		this.init = function() {
			this.topOffset = getRandomNumber(10, 50);
			this.movementRatio = getRandomNumber(10, 50);
			this.birdId = 'bird_' + getRandomNumber(100, 999);
			this.birdSize = getRandomNumber(10, 250);
			this.bounceRate = getRandomNumber(100, 300);
			this.addBird();
		};
    }

    function Pipe() {
		this.pipeId = null;
		this.pipeSize = null;
		this.leftOffset = null;
		this.movementRatio = null;
		this.flip = false;
		this.addPipe = function() {
			var _newPipe = document.createElement('img');
			_newPipe.src = 'assets  /flappy-bird-pipe-png-2-transparent-min.png';
			_newPipe.id = this.pipeId;
			_newPipe.style.height = this.pipeSize + 'px';
			_newPipe.style.left = this.leftOffset + 'px';

			if (this.flip) {
				_newPipe.style.top = 0;
				_newPipe.style.transform = 'rotate(180deg)';
			} else {
				_newPipe.style.top = windowHeight - this.pipeSize + 'px';
			}

			document.body.appendChild(_newPipe);
		};
		this.moveLeft = function(scrollDistance) {
			document.getElementById(this.pipeId).style.left = this.leftOffset - scrollDistance / this.movementRatio + 'px';
		};
		this.init = function(flip) {
			this.pipeId = 'pipe_' + getRandomNumber(1, 999);
			this.pipeSize = getRandomNumber(150, 325);
			this.movementRatio = this.pipeSize / 5;
			this.leftOffset = getRandomNumber(50, 3000);
			this.flip = (flip === true);
			this.addPipe();
		};    
    }

	var bird1 = new Bird();
        bird2 = new Bird();
        bird3 = new Bird();
        bird4 = new Bird();

    bird1.init();
    bird2.init();
    bird3.init();
    bird4.init();

	var pipe1 = new Pipe();
        pipe2 = new Pipe();
        pipe3 = new Pipe();
        pipe4 = new Pipe();
        pipe5 = new Pipe();
        pipe6 = new Pipe();
        pipe7 = new Pipe();
        pipe8 = new Pipe();
        pipe9 = new Pipe();
        pipe10 = new Pipe();
    
    pipe1.init(true);
    pipe2.init(true);
    pipe3.init(true);
    pipe4.init(true);
    pipe5.init(true);
    pipe6.init();
    pipe7.init();
    pipe8.init();
    pipe9.init();
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
        pipe1.moveLeft(offset);
        pipe2.moveLeft(offset);
        pipe3.moveLeft(offset);
        pipe4.moveLeft(offset);
        pipe5.moveLeft(offset);
        pipe6.moveLeft(offset);
        pipe7.moveLeft(offset);
        pipe8.moveLeft(offset);
        pipe9.moveLeft(offset);
        pipe10.moveLeft(offset);
        
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