var URLS = {
	"Futura": "http://en.wikipedia.org/wiki/Futura_(typeface)",
	"Metro": "http://www.fontshop.com/fontlist/families/metro/",
	"Eurostile": "http://en.wikipedia.org/wiki/Eurostile",
	"Myriad": "http://en.wikipedia.org/wiki/Myriad_(typeface)",
	"Frutiger": "http://en.wikipedia.org/wiki/Frutiger",
	"Akzidenz Grotesk": "http://en.wikipedia.org/wiki/Akzidenz_Grotesk",
	"Peignot": "http://en.wikipedia.org/wiki/Peignot",
	"Rotis": "http://en.wikipedia.org/wiki/Rotis",
	"Fedra": "http://www.typotheque.com/fonts/fedra_serif_a",
	"Lexicon": "http://en.wikipedia.org/wiki/Lexicon_(typeface)",
	"Palatino": "http://en.wikipedia.org/wiki/Palatino",
	"Times": "http://en.wikipedia.org/wiki/Times_Roman",
	"Miller": "http://new.myfonts.com/fonts/fontbureau/miller/",
	"Proforma": "http://new.myfonts.com/fonts/fontbureau/proforma/",
	"Arnhem": "http://www.fontshop.com/fonts/downloads/ourtype/arnhem_1/",
	"Interstate": "http://en.wikipedia.org/wiki/Interstate_(typeface)",
	"Franklin Gothic": "http://en.wikipedia.org/wiki/Franklin_Gothic",
	"Helvetica": "http://en.wikipedia.org/wiki/Helvetica",
	"Gotham": "http://en.wikipedia.org/wiki/Gotham_(typeface)",
	"FF Meta": "http://en.wikipedia.org/wiki/FF_Meta",
	"Swift": "http://new.myfonts.com/fonts/linotype/swift/",
	"Univers": "http://en.wikipedia.org/wiki/Univers",
	"Letter Gothic": "http://en.wikipedia.org/wiki/Letter_Gothic",
	"OCR": "http://en.wikipedia.org/wiki/OCR-A_font",
	"FF DIN": "http://en.wikipedia.org/wiki/FF_DIN",
	"Zapfino": "http://en.wikipedia.org/wiki/Zapfino",
	"FF Erikrighthand": "http://new.myfonts.com/fonts/fontfont/ff-erikrighthand/",
	"Bodoni": "http://en.wikipedia.org/wiki/Bodoni",
	"Walbaum": "http://www.linotype.com/1594/walbaum-family.html",
	"Didot": "http://en.wikipedia.org/wiki/Didot",
	"Comic Sans": "http://en.wikipedia.org/wiki/Comic_Sans",
	"Caslon": "http://en.wikipedia.org/wiki/Caslon",
	"Minion": "http://en.wikipedia.org/wiki/Minion_(typeface)",
	"Sabon": "http://en.wikipedia.org/wiki/Sabon",
	"Garamond": "http://en.wikipedia.org/wiki/Garamond",
	"Optima": "http://en.wikipedia.org/wiki/Optima",
	"Joanna": "http://en.wikipedia.org/wiki/Joanna_(typeface)",
	"FF Scala": "http://en.wikipedia.org/wiki/FF_Scala",
	"Syntax": "http://en.wikipedia.org/wiki/Syntax_(typeface)",
	"Baskerville": "http://en.wikipedia.org/wiki/Baskerville"
};
var TREE = {
	"Start out by choosing the kind of project that you'll need your typeface for.": {
		"Logo": {
			"&nbsp;": {
				"A sans serif maybe?": {
					"You like geometrics": {
						"Yes": {
							"Do you like Futura?": {
								"Yes": "Futura",
								"No": "Metro"
							}
						},
						"No": {
							"A neo-grotesk perhaps?": {
								"Yes": {
									"If I say \"Science fiction movies are my favorite\"": {
										"Good": "Eurostile",
										"Bad": "Helvetica"
									}
								},
								"No": {
									"Something humanistic, then?": {
										"Yes": {
											"Do you like the look of Adobe?": {
												"Yes": "Myriad",
												"No": "Frutiger"
											}
										},
										"No": {
											"How about something classic?": {
												"Yes": "Akzidenz Grotesk",
												"No": {
													"Then we only have something decorative": {
														"OK": "Peignot"
													}
												}
											}
										}
									}
								}
							}
						}
					}
				},
				"Or perhaps a serif?": {
					"How does the words semi-sans, semi-serif sound?": {
						"Good": "Rotis",
						"Bad": {
							"Something new, got serifs, got sans?": {
								"Good": "Fedra",
								"Bad": {
									"Is it an Italian restaurant?": {
										"Yes": "Bodoni",
										"No": {
											"Got a whole bunch of office correspondence": {
												"Yes": "Lexicon",
												"No": {
													"Here we have a classic waiting for you": {
														"OK": "Palatino"
													}
												}
											}
										}
									}
								}
							}
						}
					}
				}
			}
		},
		"Newspaper": {
			"&nbsp;": {
				"Text face": {
					"Do people call you boring from time to time?": {
						"Yes": "Times",
						"No": {
							"How about something heavily used?": {
								"Yes": "Miller",
								"No": {
									"How does relighting the American tradition sound?": {
										"Good": "Proforma",
										"Bad": "Arnhem"
									}
								}
							}
						}
					}
				},
				"Display": {
					"Do you like it traditional?": {
						"Yes": {
							"Do you like the type on highways?": {
								"Yes": {
									"Okay, to a question of age": {
										"New": "Interstate",
										"Old": "Franklin Gothic"
									}
								},
								"No": {
									"It's okay with you if it's Swiss?": {
										"Yes": "Helvetica"
									}
								}
							}
						},
						"No": {
							"Something modern, yet plainspoken": {
								"Yes": "Gotham",
								"No": {
									"Not afraid to be asked if you lived in the nineties?": {
										"Yes": "Helvetica",
										"No": "FF Meta"
									}
								}
							}
						}
					}
				},
				"Combination": {
					"Think Mr. Spiekermann is mostly right?": {
						"Yes": "Arnhem",
						"No": {
							"The Netherlands is nice, right?": {
								"Yes": {
									"Mmm. Spiky serifs are nice": {
										"OK": "Swift"
									}
								},
								"No": {
									"Get out of my flowchart!": "&nbsp;"
								}
							}
						}
					}
				}
			}
		},
		"Infographic": {
			"We all like something very condensed, yes?": {
				"Yes": "Univers",
				"No": {
					"Got a lot of tables, have you?": {
						"Yes": "Letter Gothic",
						"No": {
							"You cried when watching Terminator": {
								"Yes": "OCR",
								"No": {
									"I must say that this flowchart is looking hot": {
										"Yes": "FF DIN"
									}
								}
							}
						}
					}
				}
			}
		},
		"Invitation": {
			"Like something handwritten do you?": {
				"Yes": {
					"Something calligraphic, maybe?": {
						"Yes": "Zapfino",
						"No": "FF Erikrighthand"
					}
				},
				"No": {
					"How about something a bit fancy?": {
						"Yes": {
							"&nbsp;": {
								"Thin hairlines": "Bodoni",
								"Thinner hairlines": {
									"Readability?": {
										"Yes": "Walbaum",
										"No": "Didot"
									}
								}
							}
						},
						"No": {
							"Something fun, then? Are you alone?": {
								"Yes": {
									"Okay, then come with me": "Comic Sans"
								}
							}
						}
					}
				}
			}
		},
		"Book": {
			"Are you completely in doubt?": {
				"Yes": "Caslon",
				"No": {
					"A champion in usability perhaps?": {
						"Yes": "Minion",
						"No": {
							"Everybody loves Garamond": {
								"Yes": {
									"But perhaps one would want a larger eye?": {
										"Yes": "Sabon",
										"No": "Garamond"
									}
								},
								"No": {
									"So you want a sans serif, is that the case?": {
										"Yes": "Optima",
										"No": {
											"What is your opinion of Eric Gill?": {
												"Good": "Joanna",
												"Bad": {
													"Humanistic forms please your eye?": {
														"Yes": {
															"Okay to a question of food": {
																"Gouda": "FF Scala",
																"Emmental": "Syntax"
															}
														},
														"No": "Baskerville"
													}
												}
											}
										}
									}
								}
							}
						}
					}
				}
			}
		}
	}
};

var choices = [];

/**
 * Choose the current_choice at the current_level.
 */
function choose(current_choice, current_level) {
	/* Clear all the levels. */
	$(".level").html("");
	$(".level").removeClasses(/^_/);

	/* Set the current choice to the current level. */
	choices[current_level] = current_choice;

	/* Traverse the tree */
	var t = TREE;
	for (var i = 0; i <= current_level; i++) {
		var choice = choices[i];
		var next_choice = (i < current_level) ? choices[i + 1] : null;

		if (i == 0) {
			// do nothing.
			// t = TREE
		} else {
			if (choice == null) {
				break;
			} else {
				for (var _choice in t) {
					if (dash(_choice) == choice) {
						t = t[_choice];
					}
				}
			}
		}

		if (jQuery.isPlainObject(t)) {
			var message = "";
			for (var m in t) {
				message = m;
			}

			var level_id = "#level" + i;

			var path_id = "";
			// If we're beyond level0...
			if (i > 0) {
				// Set the class of the level to a string of choices.
			 	var dashed_choices= jQuery.map(choices, function (element, i) {
					return dash(element);
				});
				path_id = join(subarray(dashed_choices, i), "_");
				$("#level" + i).addClass(path_id);
			}

			var options = t[message];

			var html = '';

			if (message != "&nbsp;") {
				html +=
					'<div class="decision">' +
						// NOTE: We don't need to call choose() when a link is clicked.
						// The jQuery History plugin will call choose().
						// '<a href="#' + path_id + '" onclick="choose(null, ' + (i + 1) + ');jQuery.scrollTo(\'' + level_id + '\', 500);">' + message + "</a>" +
						'<a href="#' + path_id + '">' + message + "</a>" +
					"</div>";
			} else {
				html += '<div class="blank_decision">&nbsp;</div>';
			}

			html += '<div class="options">';

			if (jQuery.isPlainObject(options)) {
				for (var option in options) {
					var option_id = dash(option);

					var _class = "";
					if (next_choice != null && next_choice == option_id) {
						_class = "selected";
					}

					// NOTE: We don't need to call choose() when a link is clicked.
					// The jQuery History plugin will call choose().
					// var _onclick = "choose('" + option_id +"', " + (i + 1) + ");jQuery.scrollTo('" + level_id + "', 500);";
					// var _onclick = "jQuery.scrollTo('#fonts', 500, { axis:'y', over:0.5 });";

					var options_id = path_id + "_" + option_id;

					html += '<span class="option">' +
						'<a href="#' + options_id + '" ' +
							' class="' + _class + '" ' +
							// ' onclick="' + _onclick +
							'">' +
							option +
							'</a></span> ';
				}
			} else {
				html += '<span class="option">&nbsp;</span>';
			}

			html += '</div>';

			$("#level" + i).html(html);

			t = options;
		} else {
			// var html = '<div class="font">' + t + '</div>';
			// $(".level" + i).html(html);
			break;
		}
	}

	/* Gather the fonts in the remaining tree. */
	var fonts = [];
	gather(t, fonts);

	// $("#fonts").html();
	var html = "";
	jQuery.each(fonts.uniq().sort(), function(index, font) {
		var name = underscore(font);
		name = "images/fonts/" + name + ".png"

		var url = URLS[font];

		html += '<a class="font" href="' + url + '" target="_blank">' +
				'<img src="' + name + '" width="130" height="60" />' +
			'</a>';
	});

	$("#fonts").html(html);

	var ff = $("#fonts .font");
	if (ff.size() == 1) {
		ff.addClass("selected");
	} else {
		ff.removeClass("selected");
	}
}

/**
 * Gather the fonts in a tree.
 */
function gather(tree, fonts) {
	if (jQuery.isPlainObject(tree)) {
		for (var node in tree) {
			gather(tree[node], fonts);
		}
	} else {
		if (tree != "&nbsp;") {
			fonts.push(tree);
		}
	}
}

/**
 * Returns an array with unique elements.
 */
Array.prototype.uniq = function() {
	var src = this;
	var dest = [];
	o:for (var i=0, x = src.length; i < x; i++) {
		for (var j=0, y = dest.length; j < y; j++) {
			if (dest[j] == src[i]) {
				continue o;
			}
		}
		dest[dest.length] = this[i]
	}
	return dest;
}

/**
 * Join the elements in the array with the separator in between.
 */
function join(array, separator) {
	var str = "";
	for (var i = 0; i < array.length; i++) {
		str += array[i];

		if (i + 1 != array.length) {
			str += separator;
		}
	}
	return str;
}

/**
 * Removes classes that match the provided regular expression.
 */
jQuery.fn.removeClasses = function() {
	var regexp = arguments[0];
	$(this).each(function() {
		var obj = $(this);
		var class_attr = obj.attr("class");
		jQuery.each(class_attr.split(" "), function(i, token) {
			if (token.match(regexp)) {
				obj.removeClass(token);
			}
		});
	});
}

/**
 * Returns a subarray of the given of the array from element 0 to index (inclusive).
 */
function subarray(array, index) {
	var sub = [];
	for (var i = 0; i <= index; i++) {
		sub.push(array[i]);
	}
	return sub;
}

/**
 * Convert spaces to underscore.
 */
function underscore(str) {
	if (str) {
		var s = str.toLowerCase();
		return s.replace(/ /gi, "_");
	} else {
		return "";
	}

}

function dash(str) {
	if (str) {
		var s = str.toLowerCase();
		return s.replace(/ /gi, "-");
	} else {
		return "";
	}
}

$(document).ready(function() {
	choose("", 0);

	jQuery.History.bind(function(state) {
		// Parse the choices.
		var choices = [];
		jQuery.each(state.split("_"), function(i, n) {
			choices.push(n);
		});

		// Follow the set of choices.
		jQuery.each(choices, function(i, n) {
			choose(n, i);
		});

		// Scroll to the fonts section.
		jQuery.scrollTo("#fonts", 500, { axis:'y' })
	});
});
