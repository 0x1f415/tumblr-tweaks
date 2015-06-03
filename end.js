staticRemovable =	"#tumblr_radar";
					
variableRemovable = ".post.sponsored_post, " +
					".post .post_control.share, " +
					".reblog_follow_button";

$(staticRemovable + ", " + variableRemovable).remove();

// quick and inefficient - look up mutation observers
$("#posts").bind("DOMSubtreeModified", function() {
    $(variableRemovable).remove();
    // alert("#posts was modified!")
});

/*$(document).keyup(function(e) {
	// 190 == .
	switch(e.keyCode) {
		case 190:
			location.reload();
	}
});*/