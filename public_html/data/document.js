﻿$axure.loadDocument(
(function() {
    var _ = function() { var r={},a=arguments; for(var i=0; i<a.length; i+=2) r[a[i]]=a[i+1]; return r; }
    var _creator = function() { return _(b,_(c,d,e,f,g,d,h,d,i,d,j,k,l,d,m,f,n,f,o,d,p,f),q,_(r,[_(s,t,u,v,w,x,y,z)]),A,[B,C,D],E,[F,G,H],I,_(J,K),L,_(M,_(s,N,O,P,Q,R,S,T,U,V,W,_(X,Y,Z,ba,bb,bc),bd,be,bf,f,bg,bh,bi,T,bj,T,bk,bl,bm,f,bn,_(bo,bp,bq,bp),br,_(bs,bp,bt,bp),bu,d,bv,f,bw,N,bx,_(X,Y,Z,by),bz,_(X,Y,Z,bA),bB,bC,bD,Y,bb,bC,bE,bF,bG,bH,bI,bJ,bK,bJ,bL,bJ,bM,bJ,bN,_(),bO,null,bP,null,bQ,bF,bR,_(bS,f,bT,bU,bV,bU,bW,bU,Z,_(bX,bY,bZ,bY,ca,bY,cb,cc)),cd,_(bS,f,bT,bp,bV,bU,bW,bU,Z,_(bX,bY,bZ,bY,ca,bY,cb,cc)),ce,_(bS,f,bT,bc,bV,bc,bW,bU,Z,_(bX,bY,bZ,bY,ca,bY,cb,cf)),cg,ch),ci,_(cj,_(s,ck,bB,bF,bx,_(X,Y,Z,cl)),cm,_(s,cn),co,_(s,cp,W,_(X,Y,Z,by,bb,bc),bB,bF,bE,V,bx,_(X,Y,Z,cq)),bO,_(s,cr,bB,bF),cs,_(s,ct,bd,cu,Q,cv,bB,bF,bx,_(X,Y,Z,cw),bg,cx,bG,cy,bI,bF,bK,bF,bL,bF,bM,bF),cz,_(s,cA,bd,cB,Q,cv,bB,bF,bx,_(X,Y,Z,cw),bg,cx,bG,cy,bI,bF,bK,bF,bL,bF,bM,bF),cC,_(s,cD,bd,cE,Q,cv,bB,bF,bx,_(X,Y,Z,cw),bg,cx,bG,cy,bI,bF,bK,bF,bL,bF,bM,bF),cF,_(s,cG,bd,cH,Q,cv,bB,bF,bx,_(X,Y,Z,cw),bg,cx,bG,cy,bI,bF,bK,bF,bL,bF,bM,bF),cI,_(s,cJ,Q,cv,bB,bF,bx,_(X,Y,Z,cw),bg,cx,bG,cy,bI,bF,bK,bF,bL,bF,bM,bF),cK,_(s,cL,bd,cM,Q,cv,bB,bF,bx,_(X,Y,Z,cw),bg,cx,bG,cy,bI,bF,bK,bF,bL,bF,bM,bF),cN,_(s,cO,bB,bF,bx,_(X,Y,Z,cw),bg,cx,bG,cy,bI,bF,bK,bF,bL,bF,bM,bF),cP,_(s,cQ,bx,_(X,Y,Z,cw)),cR,_(s,cS,W,_(X,Y,Z,cT,bb,bc),bg,cx,bG,cy),cU,_(s,cV,W,_(X,Y,Z,cW,bb,bc)),cX,_(s,cY,bx,_(X,Y,Z,cZ))),da,_()));}; 
var b="configuration",c="showPageNotes",d=true,e="showPageNoteNames",f=false,g="showAnnotations",h="showAnnotationsSidebar",i="showConsole",j="linkStyle",k="displayMultipleTargetsOnly",l="linkFlowsToPages",m="linkFlowsToPagesNewWindow",n="useLabels",o="useViews",p="loadFeedbackPlugin",q="sitemap",r="rootNodes",s="id",t="p7qjdp",u="pageName",v="Page 1",w="type",x="Wireframe",y="url",z="page_1.html",A="additionalJs",B="plugins/sitemap/sitemap.js",C="plugins/page_notes/page_notes.js",D="plugins/debug/debug.js",E="additionalCss",F="plugins/sitemap/styles/sitemap.css",G="plugins/page_notes/styles/page_notes.css",H="plugins/debug/styles/debug.css",I="globalVariables",J="onloadvariable",K="",L="stylesheet",M="defaultStyle",N="627587b6038d43cca051c114ac41ad32",O="fontName",P="'Arial Standard', 'Arial', sans-serif",Q="fontWeight",R="400",S="fontStyle",T="normal",U="fontStretch",V="5",W="foreGroundFill",X="fillType",Y="solid",Z="color",ba=0xFF333333,bb="opacity",bc=1,bd="fontSize",be="13px",bf="underline",bg="horizontalAlignment",bh="center",bi="lineSpacing",bj="characterSpacing",bk="letterCase",bl="none",bm="strikethrough",bn="location",bo="x",bp=0,bq="y",br="size",bs="width",bt="height",bu="visible",bv="limbo",bw="baseStyle",bx="fill",by=0xFFFFFFFF,bz="borderFill",bA=0xFF797979,bB="borderWidth",bC="1",bD="linePattern",bE="cornerRadius",bF="0",bG="verticalAlignment",bH="middle",bI="paddingLeft",bJ="2",bK="paddingTop",bL="paddingRight",bM="paddingBottom",bN="stateStyles",bO="image",bP="imageFilter",bQ="rotation",bR="outerShadow",bS="on",bT="offsetX",bU=5,bV="offsetY",bW="blurRadius",bX="r",bY=0,bZ="g",ca="b",cb="a",cc=0.349019607843137,cd="innerShadow",ce="textShadow",cf=0.647058823529412,cg="viewOverride",ch="19e82109f102476f933582835c373474",ci="customStyles",cj="box_2",ck="47641f9a00ac465095d6b672bbdffef6",cl=0xFFF2F2F2,cm="ellipse",cn="eff044fe6497434a8c5f89f769ddde3b",co="primary_button",cp="cd64754845384de3872fb4a066432c1f",cq=0xFF169BD5,cr="75a91ee5b9d042cfa01b8d565fe289c0",cs="heading_1",ct="1111111151944dfba49f67fd55eb1f88",cu="32px",cv="bold",cw=0xFFFFFF,cx="left",cy="top",cz="heading_2",cA="b3a15c9ddde04520be40f94c8168891e",cB="24px",cC="heading_3",cD="8c7a4c5ad69a4369a5f7788171ac0b32",cE="18px",cF="heading_4",cG="e995c891077945c89c0b5fe110d15a0b",cH="14px",cI="heading_5",cJ="386b19ef4be143bd9b6c392ded969f89",cK="heading_6",cL="fc3b9a13b5574fa098ef0a1db9aac861",cM="10px",cN="paragraph",cO="4988d43d80b44008a4a415096f1632af",cP="line",cQ="619b2148ccc1497285562264d51992f9",cR="droplist",cS="85f724022aae41c594175ddac9c289eb",cT=0xFF000000,cU="form_hint",cV="4889d666e8ad4c5e81e59863039a5cc0",cW=0xFF999999,cX="form_disabled",cY="9bd0236217a94d89b0314c8c7fc75f16",cZ=0xFFF0F0F0,da="duplicateStyles";
return _creator();
})());