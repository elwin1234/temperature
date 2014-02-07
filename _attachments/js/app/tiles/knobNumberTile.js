KnobNumberTile = Class.create(NumberTile,{
	vRender : function(){
		if(this.bRendered){
			return this;
		}
		$(this.sSelector).html(
			'<div class="number" style="display:none">'+this.sGetDisplayText()+'</div><input class="animate_number" value="'+this.iNumber+'"/>');
		this.bRendered = true;
		$(this.sSelector+' .animate_number').knob({
			value: 0,
			readOnly: true,
			dynamicDraw: true,
			displayPrevious:true,
			thickness: 0.3,
			fgColor:'#fff',
			bgColor:'#662B4C',
			inputColor:'#fff',
			angleArc:250,
			angleOffset:-125,
			step:0.1,
			min:0,
			max:35,
			tickColorizeValues: true
		});
		return this;
	}
});

LiveKnobNumberTile = Class.create(LiveNumberTile,{
	vRender : function(){
		if(this.bRendered){
			return this;
		}
		$(this.sSelector).html(
			'<div class="number" style="display:none">'+this.sGetDisplayText()+'</div><input class="animate_number" value="'+this.iNumber+'"/>');
		this.bRendered = true;
		$(this.sSelector+' .animate_number').knob({
			value: 0,
			readOnly: true,
			dynamicDraw: true,
			displayPrevious:true,
			thickness: 0.3,
			fgColor:'#fff',
			bgColor:'#662B4C',
			inputColor:'#fff',
			angleArc:250,
			angleOffset:-125,
			step:0.1,
			min:0,
			max:35,
			tickColorizeValues: true,
		});
		return this;
	}
});