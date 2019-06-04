var text = {
  'intro' : {
    'EN' : `This election dashboard introduces Myanmar's first complete
    dataset of election results compiled by the Tech for Change team at Phandeeyar.
    The data is available for download under a Creative Commons license. The user
    is welcome to explore the data using our dashboard.`,

    'MM' : `ယခုတွေ့ရှိရသော အင်တာနက်စာမျက်နှာသည် ဖန်တီးရာ တက်ခ်ဖော်ချိန်းအဖွဲ့မှ စုစည်းထားသော
    မြန်မာနိုင်ငံ၏ ပထမဦးဆုံး ပြည့်ဝစုံလင်သော ရွေးကောက်ပွဲရလဒ်ဒေတာများကို မိတ်ဆက်ဖော်ပြသော
    စာမျက်နှာဖြစ်ပါသည်။`
  },
};


var yearSelect = '2010';

var yearS = 'yr';
var year4const = "yr2010";
var house4const = null;
var constSelect = null;
var yrData = null; 
var piChartData = {};


var yearInfo = {'2015': [{'Held on':'8 Nov 2015','Available seats':'1557','President':'Htin Kyaw', 'link':'https://en.wikipedia.org/wiki/Htin_Kyaw','sauce':'https://en.wikipedia.org/wiki/2015_Myanmar_general_election'}],
                '2010':[{'Held on':'7 Nov 2010','Available seats':'1544','President':'Thein Sein', 'link':'https://en.wikipedia.org/wiki/Thein_Sein','sauce':'https://en.wikipedia.org/wiki/2010_Myanmar_general_election'}],
                '2012':[{'Held on':'1 April 2012','Available seats':'48','President':'Thein Sein', 'link':'https://en.wikipedia.org/wiki/Thein_Sein','sauce':'https://en.wikipedia.org/wiki/2012_Myanmar_by-elections'}],
                '2017':[{'Held on':'1 Apr 2017','Available seats':'19','President':'Htin Kyaw', 'link':'https://en.wikipedia.org/wiki/Htin_Kyaw','sauce':'https://en.wikipedia.org/wiki/2017_Myanmar_by-elections'}],
                '2018':[{'Held on':'3 Nov 2018','Available seats':'13','President':'Win Myint', 'link':'https://en.wikipedia.org/wiki/Win_Myint_(politician,_born_1951)','sauce':'https://en.wikipedia.org/wiki/2018_Myanmar_by-elections'}]};

var candidateData = {"2010":[{"candidates":1084,"partyAbb":"USDP"},{"candidates":975,"partyAbb":"NUP"},{"candidates":158,"partyAbb":"NDF"},{"candidates":153,"partyAbb":"SNDP"},{"candidates":78,"partyAbb":"Inde"},{"candidates":48,"partyAbb":"DPM"},{"candidates":38,"partyAbb":"CPP"},{"candidates":33,"partyAbb":"AMRDP"},{"candidates":29,"partyAbb":"KPP"},{"candidates":27,"partyAbb":"88GSY"}],"2012":[{"candidates":45,"partyAbb":"USDP"},{"candidates":44,"partyAbb":"NLD"},{"candidates":22,"partyAbb":"NUP"},{"candidates":11,"partyAbb":"NDF"},{"candidates":7,"partyAbb":"Inde"},{"candidates":4,"partyAbb":"UPP"},{"candidates":3,"partyAbb":"DPMNS"},{"candidates":3,"partyAbb":"MNC"},{"candidates":3,"partyAbb":"NNDP"},{"candidates":3,"partyAbb":"UDP"}],"2015":[{"candidates":1092,"partyAbb":"USDP"},{"candidates":1091,"partyAbb":"NLD"},{"candidates":743,"partyAbb":"NUP"},{"candidates":349,"partyAbb":"NDP"},{"candidates":282,"partyAbb":"Inde"},{"candidates":282,"partyAbb":"MFDP"},{"candidates":262,"partyAbb":"NDF"},{"candidates":190,"partyAbb":"SNDP"},{"candidates":147,"partyAbb":"SNLD"},{"candidates":112,"partyAbb":"KPP"}],"2017":[{"candidates":19,"partyAbb":"NLD"},{"candidates":18,"partyAbb":"USDP"},{"candidates":7,"partyAbb":"Inde"},{"candidates":7,"partyAbb":"SNDP"},{"candidates":7,"partyAbb":"SNLD"},{"candidates":6,"partyAbb":"NDP"},{"candidates":5,"partyAbb":"NDF"},{"candidates":4,"partyAbb":"DP"},{"candidates":3,"partyAbb":"NUP"},{"candidates":2,"partyAbb":"LNDP"}],"2018":[{"candidates":12,"partyAbb":"NLD"},{"candidates":9,"partyAbb":"USDP"},{"candidates":6,"partyAbb":"Inde"},{"candidates":4,"partyAbb":"PLP"},{"candidates":3,"partyAbb":"ALD"},{"candidates":3,"partyAbb":"MPDP"},{"candidates":3,"partyAbb":"NUDP"},{"candidates":3,"partyAbb":"UEPFDP"},{"candidates":2,"partyAbb":"CLD"},{"candidates":2,"partyAbb":"DPM"}]};



var parliData = {'2010':[{'id':'NLD','seats':0},{'id':'USDP','seats':58},{'id':'Others','seats':17},{'id':'Military','seats':25}],
                '2012':[{'id':'NLD','seats':3},{'id':'USDP','seats':55},{'id':'Others','seats':17},{'id':'Military','seats':25}],
                 '2015':[{'id':'NLD','seats':59},{'id':'USDP','seats':6},{'id':'Others','seats':10},{'id':'Military','seats':25}],
                 '2017':[{'id':'NLD','seats':58},{'id':'USDP','seats':6},{'id':'Others','seats':11},{'id':'Military','seats':25}],
                 '2018':[{'id':'NLD','seats':58},{'id':'USDP','seats':6},{'id':'Others','seats':11},{'id':'Military','seats':25}],
                }    

//----------------------------------------------------------------------
//Table and drop down variables

var ddYearSelect = 'yr2010';
var ddHouseSelect = Object.keys(elect[ddYearSelect])[0];
var ddStateSelect = [...new Set(elect[ddYearSelect][ddHouseSelect].map(x => x.name_st))][0];

//var ddStatesLoc = [];

//----------------------------------------------------------------------
var statesLoc = [];
var j = 0;
for(var i = 0; i < elect[ddYearSelect][ddHouseSelect].length; i++){
    if(elect[ddYearSelect][ddHouseSelect].map(x => x.name_st)[i] == ddStateSelect) {
        statesLoc[j] = i;
        j++;
    }
}

var NewStateData = [];
for (var i = 0; i < statesLoc.length; i++) {
    NewStateData [i] = elect[ddYearSelect][ddHouseSelect][statesLoc[i]];
}
//----------------------------------------------------------------------
var ddConstSelect = [...new Set(NewStateData.map(x => x.const_name))][0];
var constLoc = [];
j = 0;
for(var i = 0;i < NewStateData.length; i++) {
    if(NewStateData.map(x => x.const_name)[i] == ddConstSelect) {
        constLoc[j] = i;
        j++;
    }
}
var constTable = [];
for (var i = 0; i <constLoc.length; i++) {
    constTable [i] = NewStateData[constLoc[i]];
}


//----------------------------------------------------------------------
//Drop down variables
var years = Object.keys(elect);
var houses = Object.keys(elect[ddYearSelect]);
var states = [...new Set(elect[ddYearSelect][ddHouseSelect].map(x => x.name_st))];
var consts = [...new Set(NewStateData.map(x => x.const_name))];
//----------------------------------------------------------------------

  var houseNameTranslate = {
      'amyotha' : 'Amyotha',
      'pyithu' : 'Pyithu',
      'sr' : 'State/Region'
  };


var colNameTranslate = {
    'name_st' : 'State name',
    'const_code' : 'Constituency code',
    'const_name' : 'Constituency name',
    'candidate_name.my' : 'Candidate name',
    'party_name.en' : 'Party Name',
    'votes.total_valid' : 'Total votes'
}

var tabLabelTranslate = {
'amyotha' :'အမျိုးသားလွှတ်တော်',
'pyithu': 'ပြည်သူ့လွှတ်တော်',
'sr' : 'တိုင်းဒေသကြီးလွှတ်တော်'
};






















                     