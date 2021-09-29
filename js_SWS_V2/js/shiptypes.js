//List of all available ships
var Shiptypes = [//Milita:
							[{Name: "Commune Class", HP: 15, Acc: 30, Def: 10, Mov: 10, Weap:[{Name: "Quintus Cannon", Type: "Generic", Count: 32, Watk: 32, Whit: 75, Wran: 2, WRatk: 0, APCost: 1}], SizeX: 1, SizeY: 1, Shape: "Triangle"},
							{Name: "Confederation Class", HP: 45, Acc: 25, Def: 15, Mov: 8, Weap:[{Name: "Short Cannon", Type:"Defensive", Count: 56, Watk: 32, Whit: 80, Wran: 3, WRatk:-1, Wcov:10, APCost:1}], SizeX: 1, SizeY: 1, Shape: "Circle"},
							{Name: "Syndicate Class", HP: 60, Acc: 25, Def: 23, Mov: 10, Weap:[{Name: "Mainline Cannon", Type:"Generic", Count:64, Watk: 48, Whit: 80, Wran: 4, WRatk: 0, APCost:1},{Name:"Short Cannon", Type:"Defensive", Count:14, Watk:32, Whit:70, Wran:3, WRatk: -1, Wcov: 2, APCost: 1},{Name:"Combined-Style Missile", Type:"Missile", Count: 8, Watk: 42, Whit: 85, Wran: 4, WRatk: 2, APCost: 1}], SizeX: 1, SizeY: 1, Shape: "Square"},
							{Name: "Consortium Class", HP: 65, Acc: 20, Def: 25, Mov: 10, Weap: [{Name:"Ramming Armour", Type:"Ramming", Count:Infinity, Watk: 60, Whit: 80, Wran: 0, WRatk: -45, APCost: 1},{Name:"Short Cannon", Type:"Defensive", Count:14, Watk:32, Whit:70, Wran:3, WRatk: -1, Wcov: 2, APCost: 1},{Name:"Combined-Style Missile", Type:"Missile", Count: 4, Watk: 40, Whit: 85, Wran: 4, WRatk: 2, APCost: 1}], SizeX: 1, SizeY: 1, Shape: "Square"},
							{Name: "Soviet Class", HP: 40, Acc: 0, Def: 17, Mov: 8, Weap: [{Name:"Commune Class", Type:"Deploying", Count: 6, dType: 0, APCost: 1}], SizeX: 1, SizeY: 1, Shape: "Rectangle"},
							{Name: "Union Class", HP: 275, Acc: 30, Def: 25, Mov: 6, Weap: [{Name: "Torpedoes", Type:"Generic", Count: 126, Watk: 40, Whit: 80, Wran: 6, WRatk: 1, APCost: 1},{Name: "High Thrust Missile", Type: "Missile", Count: 62, Watk: 40, Whit: 85, Wran: 7, WRatk: 2, APCost: 1},{Name: "High Penetration Missiles", Type: "Missile", Count: 44, Watk: 50, Whit: 85, Wran: 5, WRatk: 1, APCost: 1},{Name: "Mainline Cannon", Type:"Generic", Count:320, Watk: 48, Whit: 80, Wran: 4, WRatk: 0, APCost:1},{Name: "Short Cannon", Type:"Defensive", Count: 28, Watk: 32, Whit: 80, Wran: 3, WRatk:-1, Wcov: 3, APCost:1},{Name:"Commune Class", Type:"Deploying", Count: 12, dType: 0, APCost: 1}], SizeX: 1, SizeY: 2, Shape: "Octagon"}],
				//MCRN	
							[{Name: "Patrol Destroyer", HP: 20, Acc: 20, Def: 12, Mov: 8, Weap:[{Name: "Conventional Torpedoes", Type: "Missile", Count: 4, Watk: 30, Whit: 85, Wran: 3, WRatk: 1, APCost: 1},{Name: "Plasma Torpedoes", Type: "Missile", Count:4, Watk: 35, Whit: 80, Wran: 3, WRatk: 0, APCost: 1},{Name: "PDC", Type: "Defensive", Count: 50, Watk: 28, Whit: 70, Wran: 2, WRatk: -1, Wcov:10, APCost: 1}], SizeX: 1, SizeY: 1, Shape: "Triangle"},
							{Name: "Fast Destroyer", HP: 40, Acc: 25, Def: 15, Mov: 10, Weap:[{Name: "Conventional Torpedoes", Type: "Missile", Count: 20, Watk: 32, Whit: 85, Wran: 4, WRatk: 1, APCost: 1},{Name: "Plasma Torpedoes", Type: "Missile", Count: 20, Watk: 38, Whit: 80, Wran: 4, WRatk: 0, APCost: 1},{Name: "PDC", Type: "Defensive", Count: 225, Watk: 32, Whit: 70, Wran: 3, WRatk: -1, Wcov:10, APCost: 1}], SizeX: 1, SizeY: 1, Shape: "Triangle"},
							{Name: "Light Frigate", HP: 35, Acc: 25, Def: 15, Mov: 7, Weap:[{Name: "Conventional Torpedoes", Type: "Missile", Count: 10, Watk: 32, Whit: 85, Wran: 3, WRatk: 1, APCost: 1},{Name: "Plasma Torpedoes", Type: "Missile", Count: 10, Watk: 38, Whit: 80, Wran: 3, WRatk: 0, APCost: 1},{Name: "PDC", Type: "Defensive", Count: 210, Watk: 28, Whit: 70, Wran: 2, WRatk: -1, Wcov:10, APCost: 1}], SizeX: 1, SizeY: 1, Shape: "Rectangle"},
							{Name: "Heavy Frigate", HP: 50, Acc: 25, Def: 25, Mov: 7, Weap:[{Name: "Conventional Torpedoes", Type: "Missile", Count: 15, Watk: 32, Whit: 85, Wran: 3, WRatk: 1, APCost: 1},{Name: "Plasma Torpedoes", Type: "Missile", Count: 15, Watk: 38, Whit: 80, Wran: 3, WRatk: 0, APCost: 1},{Name: "PDC", Type: "Defensive", Count: 225, Watk: 32, Whit: 70, Wran: 2, WRatk: -1, Wcov:10, APCost: 1}], SizeX: 1, SizeY: 1, Shape:"Rectangle"},
							{Name: "Light Cruiser", HP: 65, Acc: 20, Def: 25, Mov: 7, Weap:[{Name: "Conventional Torpedoes", Type: "Missile", Count: 30, Watk: 32, Whit: 85, Wran: 4, WRatk: 1, APCost: 1},{Name: "Plasma Torpedoes", Type: "Missile", Count: 30, Watk: 38, Whit: 80, Wran: 4, WRatk: 0, APCost: 1},{Name: "PDC", Type: "Defensive", Count: 235, Watk: 32, Whit: 70, Wran: 3, WRatk: -1, Wcov:10, APCost: 1}], SizeX: 1, SizeY: 1, Shape: "Square"},
							{Name: "Nuclear Cruiser", HP: 85, Acc: 25, Def: 25, Mov: 8, Weap:[{Name: "Conventional Torpedoes", Type: "Missile", Count: 65, Watk: 32, Whit: 85, Wran: 4, WRatk: 1, APCost: 1},{Name: "Plasma Torpedoes", Type: "Missile", Count: 65, Watk: 38, Whit: 80, Wran: 4, WRatk: 0, APCost: 1},{Name: " Nuclear Torpedoes", Type: "Missile", Count: 10, Watk: 400, Whit: 70, Wran: 4, WRatk: 0, APCost: 1},{Name: "PDC", Type: "Defensive", Count: 350, Watk: 32, Whit: 70, Wran: 3, WRatk: -1, Wcov:10, APCost: 1}], SizeX: 1, SizeY: 1, Shape:"Square"},
							{Name: "Escort", HP: 75, Acc: 25, Def: 25, Mov: 8, Weap:[{Name: "Conventional Torpedoes", Type: "Missile", Count: 20, Watk: 32, Whit: 85, Wran: 4, WRatk: 1, APCost: 1},{Name: "Plasma Torpedoes", Type: "Missile", Count: 20, Watk: 38, Whit: 80, Wran: 4, WRatk: 0, APCost: 1},{Name: "PDC", Type: "Defensive", Count: 250, Watk: 32, Whit: 70, Wran: 3, WRatk: -1, Wcov:10, APCost: 1}], SizeX: 1, SizeY: 1, Shape: "Circle"},
							{Name: "Donnager Class Dreadnought", HP: 550, Acc: 30, Def: 25, Mov: 6,Weap:[{Name: "Conventional Torpedoes", Type: "Missile", Count: 100, Watk: 32, Whit: 85, Wran: 4, WRatk: 1, APCost: 1},{Name: "Plasma Torpedoes", Type: "Missile", Count: 100, Watk: 38, Whit: 80, Wran: 4, WRatk: 0, APCost: 1},{Name: "Nuclear Torpedoes", Type: "Missile", Count: 50, Watk: 400, Whit: 70, Wran: 4, WRatk: 0, APCost: 1},{Name: "Foehammer Ultra-Heavy Railgun Turrets", Type: "Generic", Count: 300, Watk: 60, Whit: 85, Wran: 6, WRatk: 0, APCost: 1},{Name: "PDC", Type: "Defensive", Count: 2682, Watk: 33, Whit: 70, Wran: 3, WRatk: -1, Wcov:10, APCost: 1},{Name:"Deploy Frigate", Type:"Deploying", Count: 8, dType: 2, APCost: 1}],SizeX: 1, SizeY: 2, Shape:"Octagon"}],
				//UKT-F
							[{Name: "Hidepoint Class", HP: 15, Acc: 30, Def: 10, Mov: 9, Weap: [{Name:"Railgun", Type:"Generic", Count:50, Watk: 25, Whit: 65, Wran: 2, WRatk:-1, APCost: 1},{Name: "Machine Gun", Type:"Generic", Count: 200, Watk: 10, Whit: 90, Wran:2, WRatk:-2, APCost:1}], SizeX: 1, SizeY: 1, Shape: "Triangle"},
							{Name: "Broadhead Class", HP: 50, Acc: 25, Def: 15, Mov: 6, Weap:[{Name:"Heal", Type: "Healing", Count:Infinity, Watk:10, APCost: 0.25}] , SizeX: 1, SizeY: 1, Shape: "Rectangle"},
							{Name: "Narrowpoint Class", HP: 30, Acc: 25, Def: 12, Mov: 10, Weap: [{Name: "Railgun", Type: "Generic", Count: 20, Watk: 35, Whit: 70, Wran: 3, WRatk: -1, APCost: 1},{Name:"Machine Gun", Type: "Generic", Count: 200, Watk: 10, Whit: 90, Wran:2, WRatk: -2, APCost: 1},{Name:"Low-Power Laser", Type: "Generic", Count: Infinity, Watk: 20, Whit: 95, Wran:3, WRatk: -1, APCost: 1},{Name:"High-Power Laser", Type:"Generic", Count: Infinity, Watk: 47, Whit: 55, Wran: 3, WRatk: -1, APCost: 1}], SizeX: 1, SizeY: 1, Shape: "Rectangle"},
							{Name: "Finhead Class", HP: 65, Acc: 20, Def: 18, Mov: 8, Weap: [{Name:"Naval Gun", Type:"Generic", Count: 30, Watk: 45, Whit: 80, Wran: 4, WRatk: -1, APCost: 1},{Name: "Machine Gun", Type:"Generic", Count: 200, Watk: 15, Whit: 90, Wran:2, WRatk: -2, APCost: 1},{Name:"Mine", Type:"Deploying", Count: 1, dType: 4,APCost: 1}], SizeX: 1, SizeY: 1, Shape: "Square"},
							{Name: "Mine", HP:1, Acc: 25, Def:0, Mov: 0, Weap: [{Name:"Explode!!", Type:"Destruct", Count:1 ,Watk: 50, Whit: 95, Wran: 0, WRatk: -50, APCost: 0}], SizeX:1, SizeY:1, Shape: "Circle"}],
				//USSR	
							[{Name: "Queen Class", HP: 50, Acc: 15, Def: 20, Mov: 7, Weap: [{Name:"Parasite Drone", Type:"Deploying", Count: 6, dType: 3, APCost: 1}], SizeX: 1, SizeY: 1, Shape: "Square"},
							{Name: "D/T Class", HP: 30,Acc: 20, Def: 17, Mov: 7, Weap: [{Name:"Railgun", Type:"Defensive", Count: 200, Watk: 40, Whit: 70, Wran: 3, WRatk: -1, Wcov: 2 , APCost: 1}], SizeX: 1, SizeY: 1, Shape: "Rectangle"},
							{Name: "FT-63", HP: 15,Acc: 30, Def: 10, Mov: 8, Weap: [{Name:"Railgun", Type:"Generic", Count: 50, Watk: 25, Whit: 55, Wran: 2, WRatk: -1, APCost: 1}, {Name:"Tungsten Gun", Type:"Generic", Count: 100, Watk: 14, Whit: 70, Wran: 1, WRatk: 0, APCost: 1}], SizeX: 1, SizeY: 1, Shape: "Triangle"},
							{Name: "Parasite Drone", HP: 8,Acc: 30, Def: 20, Mov: 6, Weap: [{Name:"Explode!!", Type: "Destruct", Count:1 ,Watk: 40, Whit: 95, Wran: 1, WRatk: -50, APCost: 0}], SizeX:1, SizeY:1, Shape: "Circle"},
							{Name: "Tolmekia Class", HP: 140,Acc: 20, Def: 18, Mov: 4, Weap: [{Name:"Phaser", Type:"Defensive", Count: Infinity, Watk: 20, Whit: 80, Wran: 3, WRatk: -1, Wcov: 8 , APCost: 1},{Name:"High-Power Ion Cannon", Type:"Generic", Count: Infinity, Watk: 40, Whit: 50, Wran: 3, WRatk: -2, APCost: 1}, {Name:"Low-Power Ion Cannon", Type:"Generic", Count: Infinity, Watk: 25, Whit: 90, Wran: 2, WRatk: -1, APCost: 1}], SizeX: 1, SizeY: 2, Shape: "Octagon"},
							{Name: "Nausicaa Class", HP: 95,Acc: 20, Def: 20, Mov: 5, Weap: [{Name:"Torpedoes", Type:"Missile", Count: 72, Watk: 25, Whit: 75, Wran: 4, WRatk: 1, APCost: 1}, {Name:"Mass Driver", Type:"Generic", Count: 80, Watk: 32, Whit: 70, Wran: 4, WRatk: 0, APCost: 1}, {Name:"Anti-Ship Cannon", Type:"Generic", Count: 21, Watk: 45, Whit: 75, Wran: 2, WRatk: -1, APCost: 1}, {Name:"Interceptor Cannon", Type:"Defensive", Count: 30, Watk: 16, Whit: 95, Wran: 1, WRatk: 0, Wcov: 7, APCost: 1}], SizeX: 1, SizeY: 1, Shape: "Square"},
							{Name: "DM Class", HP: 38,Acc: 25, Def: 15, Mov: 7, Weap: [{Name:"Anti-Ship Cannon", Type:"Generic", Count: 50, Watk: 45, Whit: 78, Wran: 2, WRatk: -1, APCost: 1}, {Name:"Mass Driver", Type:"Generic", Count: 60, Watk: 28, Whit: 75, Wran: 3, WRatk: 0, APCost: 1}, {Name:"Low-Power Laser", Type:"Generic", Count: Infinity, Watk: 20, Whit: 95, Wran: 3, WRatk: -1, APCost: 1}, {Name:"High-Power Laser", Type:"Generic", Count: Infinity, Watk: 47, Whit: 55, Wran: 3, WRatk: -1,APCost: 1}], SizeX: 1, SizeY: 1, Shape: "Rectangle"}],		
				//Astute			
							[{Name:"Agggg", HP: 25, Acc: 25, Def:25, Mov: 10, Weap:[{Name: "Baddd", Type: "Generic", Count: 1, Watk:1000, Whit: 1000, Wran: 32, WRatk: 0, APCost: 1}], SizeX: 1, SizeY: 2, Shape: "Octagon"}]		
							
							];
//Factions
var openingFaction = 0;
var endingFaction = 4;
var PlayCom = ["Milita","MCRN","UKT-F", "USSR",/*"RM Space",*/"Astute"];
var FactColor = ["#3264C8","#992d22","#ff0f00","#7e0505","#0000ff"];
var Player = [" ","M","N","2","F","3","4","5","U","6","7","8","9","c","v","b"];
//Faction Traits: Damage Dealing, Damage Recieved, Acc change, Defensive Weap Boost, Watk change, Whit change, Wran change, WRatk change, Def Change, Damage Dealing dependent on percentage, Change only applies to enemy attacks
var FactionTraits = [[5,5,0,0,0,0,0,0,0,false,false],[0,0,0,5,0,0,0,0,0,false,false],[0,0,-5,0,0,0,0,0,0,false,true],[8,0,0,0,0,0,0,0,0,true,false],[0,0,0,0,0,0,0,0,0,false,false]];