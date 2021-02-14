comment "Exported from Arsenal by gilGames";

comment "[!] UNIT MUST BE LOCAL [!]";
if (!local this) exitWith {};

comment "Remove existing items";
removeAllWeapons this;
removeAllItems this;
removeAllAssignedItems this;
removeUniform this;
removeVest this;
removeBackpack this;
removeHeadgear this;
removeGoggles this;

comment "Add weapons";
this addWeapon "CUP_lmg_minimipara";
this addPrimaryWeaponItem "CUP_200Rnd_TE1_Red_Tracer_556x45_M249";

comment "Add containers";
this forceAddUniform "CUP_U_B_HIL_ACU_Rolled_CCE";
this addVest "CUP_V_B_PASGT_CCE";
this addBackpack "CUP_B_TacticalPack_CCE";

comment "Add items to containers";
for "_i" from 1 to 10 do {this addItemToUniform "ACE_fieldDressing";};
for "_i" from 1 to 2 do {this addItemToUniform "ACE_CableTie";};
for "_i" from 1 to 2 do {this addItemToUniform "ACE_morphine";};
for "_i" from 1 to 4 do {this addItemToUniform "ACE_tourniquet";};
for "_i" from 1 to 2 do {this addItemToUniform "CUP_HandGrenade_M67";};
this addItemToVest "CUP_NVG_PVS15_tan";
for "_i" from 1 to 2 do {this addItemToVest "SmokeShell";};
this addItemToBackpack "ACE_Flashlight_XL50";
this addItemToBackpack "ACE_MapTools";
for "_i" from 1 to 3 do {this addItemToBackpack "CUP_200Rnd_TE1_Red_Tracer_556x45_M249";};
this addHeadgear "CUP_H_HIL_HelmetACH_CCE";

comment "Add items";
this linkItem "ItemMap";
this linkItem "ItemCompass";
this linkItem "ItemWatch";
this linkItem "ItemGPS";

comment "Set identity";
[this,"WhiteHead_21","male02eng"] call BIS_fnc_setIdentity;
