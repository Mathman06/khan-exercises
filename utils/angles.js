jQuery.extend( KhanUtil, {
	commonAngles: [
		{deg: 15, rad: "\\frac{\\pi}{12}",trad: "\\frac{\\tau}{24}"},
		{deg: 30, rad: "\\frac{\\pi}{6}",trad: "\\frac{\\tau}{12}"},
		{deg: 45, rad: "\\frac{\\pi}{4}",trad: "\\frac{\\tau}{8}"},
		{deg: 60, rad: "\\frac{\\pi}{3}",trad: "\\frac{\\tau}{6}"},
		{deg: 90, rad: "\\frac{\\pi}{2}",trad: "\\frac{\\tau}{4}"},
		{deg: 120, rad: "\\frac{2\\pi}{3}",trad: "\\frac{\\tau}{3}"},
		{deg: 135, rad: "\\frac{3\\pi}{4}",trad: "\\frac{3\\tau}{8}"},
		{deg: 150, rad: "\\frac{5\\pi}{6}",trad: "\\frac{5\\tau}{12}"},
		{deg: 180, rad: "\\pi",trad: "\\frac{\\tau}{2}"},
		{deg: 210, rad: "\\frac{7\\pi}{6}",trad: "\\frac{7\\tau}{8}"},
		{deg: 225, rad: "\\frac{5\\pi}{4}",trad: "\\frac{5\\tau}{8}"},
		{deg: 240, rad: "\\frac{4\\pi}{3}",trad: "\\frac{2\\tau}{3}"},
		{deg: 270, rad: "\\frac{3\\pi}{2}",trad: "\\frac{3\\tau}{4}"},
		{deg: 300, rad: "\\frac{5\\pi}{3}",trad: "\\frac{5\\tau}{6}"},
		{deg: 315, rad: "\\frac{7\\pi}{4}",trad: "\\frac{7\\tau}{8}"},
		{deg: 330, rad: "\\frac{11\\pi}{6}",trad: "\\frac{11\\tau}{12}"},
		{deg: 360, rad: "2\\pi",trad: "\\tau"}
	],

	// Convert a degree value to a radian value
	toRadians: function( degrees ) {
		return degrees * Math.PI / 180;
	},

	// Convert a radian value to a degree value
	toDegrees: function( radians ) {
		return radians * 180 / Math.PI;
	},

	wrongCommonAngle: function( angleIdx, i ) {
		// i is a value from 1 to 3
		return KhanUtil.commonAngles[ (angleIdx + (4 * i)) % KhanUtil.commonAngles.length ];
	},

	wrongDegrees: function( degrees ) {
		var offset;
		var wrong;

		do {
			offset = KhanUtil.randRange( 10, 35 );
			if (KhanUtil.rand(2)) {
				offset *= -1;
			}

			wrong = degrees + offset;
		} while ( !(wrong >= 0 && wrong <= 360) );

		return wrong;
	},

	wrongRadians: function( radians ) {
		var offset;
		var wrong;

		do {
			offset = KhanUtil.randRange( 10, 35 ) / 100;
			if (KhanUtil.rand(2)) {
				offset *= -1;
			}

			wrong = KhanUtil.roundTo( 2, radians + offset );
		} while ( !(wrong >= 0 && wrong <= 2 * Math.PI) );

		return wrong;
	}
});
