// Links to each state's ballot tracking found via Google, votesaveamerica.com,
// and pcmag.com/how-to/how-to-track-your-absentee-ballot-by-state

// prettier-ignore
const trackers = {
  AK: {
    name: "Alaska",
    url: "https://myvoterinformation.alaska.gov",
    description: "Alaska Division of Elections",
  },
  AL: {
    name: "Alabama",
    url: "https://myinfo.alabamavotes.gov/voterview",
    description: "Alabama Votes",
  },
  AR: {
    name: "Arkansas",
    url: "https://www.voterview.ar-nova.org/VoterView",
    description: "Arkansas Secretary of State",
    more: "Kind of! If you go to Arkansas's Voter View page and fill in the Registration Information section, it will show your voter registration status and the status of a mail-in ballot request. If you have questions about the status of your ballot you may contact your county clerk’s office or email voterservices@sos.arkansas.gov. Check your ballot status below",
  },
  AS: {
    name: "American Samoa",
    url: "",
    description: "",
  },
  AZ: {
    name: "Arizona",
    url: "https://my.arizona.vote/AbsenteeTracker.aspx",
    description: "Arizona Secretary of State, Voter Information Portal",
    provisional: "https://my.arizona.vote/provisionalsearch.aspx",
  },
  CA: {
    name: "California",
    url: "https://california.ballottrax.net/voter/",
    description: "California Secretary of State, Where's My Ballot?",
  },
  CO: {
    name: "Colorado",
    url: "https://colorado.ballottrax.net/voter/",
    description: "Colorado Ballottrax",
  },
  CT: {
    name: "Connecticut",
    url: "https://portaldir.ct.gov/sots/LookUp.aspx",
    description: "Connecticut Secretary of State",
    more: "You can also email lead@ct.gov or call at (860) 509-6100"
  },
  DC: {
    name: "District of Columbia",
    url: "https://www.dcboe.org/Voters/Absentee-Voting/Track-Absentee-Ballot",
    description: "District of Columbia Board of Elections",
  },
  DE: {
    name: "Delaware",
    url: "https://ivote.de.gov/VoterView",
    description: "Delaware Department of Elections",
  },
  FL: {
    name: "Florida",
    url: "https://registration.elections.myflorida.com/CheckVoterStatus",
    description: "Florida Department of State",
  },
  GA: {
    name: "Georgia",
    url: "https://www.mvp.sos.ga.gov",
    description: "Georgia Secretary of State, My Voter Page",
  },
  GU: {
    name: "Guam",
    hide: "yes",
    url: "",
    description: "",
  },
  HI: {
    name: "Hawaii",
    url: "https://ballotstatus.hawaii.gov",
    description: "Hawaii Office of Elections",
  },
  IA: {
    name: "Iowa",
    url: "https://sos.iowa.gov/elections/absenteeballotstatus/absentee/search",
    description: "Iowa Secretary of State",
  },
  ID: {
    name: "Idaho",
    url: "https://elections.sos.idaho.gov/ElectionLink/ElectionLink/VoterSearch.aspx",
    description: "Idaho Secretary of State",
  },
  IL: {
    name: "Illinois",
    url: "https://elections.il.gov/VotingAndRegistrationSystems/ProvisionalBallotSearch.aspx",
    military: "https://move.elections.il.gov",
    description: "Provisional Ballots only",
    more: "Some counties allow ballot tracking, so check with your local elections office.",
    more_url: "https://elections.il.gov/ElectionOperations/ElectionAuthorities.aspx"
  },
  IN: {
    name: "Indiana",
    url: "https://indianavoters.in.gov",
    description: "Indiana Secretary of State, Voter Portal",
    more: "It is unclear if you can check the status of your absentee ballot or not."
  },
  KS: {
    name: "Kansas",
    url: "https://myvoteinfo.voteks.org/voterview",
    description: "Kansas Secretary of State, VoterView",
  },
  KY: {
    name: "Kentucky",
    url: "https://vrsws.sos.ky.gov/vic/",
    description: "Kentucky State Board of Elections",
  },
  LA: {
    name: "Louisiana",
    url: "https://voterportal.sos.la.gov",
    description: "Louisiana Secretary of State, Geaux Vote",
  },
  MA: {
    name: "Massachusetts",
    url: "https://www.sec.state.ma.us/wheredoivotema/track/trackmyballot.aspx",
    description: "Secretary of the Commonwealth of Massachusetts",
  },
  MD: {
    name: "Maryland",
    url: "https://voterservices.elections.maryland.gov/VoterSearch",
    description: "Maryland Board of Elections",
  },
  ME: {
    name: "Maine",
    url:
      "https://apps.web.maine.gov/cgi-bin/online/AbsenteeBallot/ballot_status.pl",
    description: "Maine Secretary of State",
  },
  MI: {
    name: "Michigan",
    url: "https://mvic.sos.state.mi.us/Voter/Index",
    description: "Michigan Department of State, Voter Information Center",
  },
  MN: {
    name: "Minnesota",
    url: "https://mnvotes.sos.state.mn.us/AbsenteeBallotStatus.aspx",
    description: "Minnesota Secretary of State",
  },
  MO: {
    name: "Missouri",
    url: "https://movotesportal.sos.mo.gov/movotes/voter/login.aspx",
    description: "Military only",
    more: "If you mail, fax or email your ballot, you can confirm that your ballot was received by your local election authority by contacting the office at elections@sos.mo.gov or (866) 868-3245."
  },
  MP: {
    name: "Northern Mariana Islands",
    hide: "yes",
    url: "",
    description: "",
  },
  MS: {
    name: "Mississippi",
    url: "https://www.sos.ms.gov/MSCountyElectionInfo/",
    description: "You can check the status of your absentee ballot by contacting your election official",
  },
  MT: {
    name: "Montana",
    url: "https://app.mt.gov/voterinfo/",
    description: "My Voter Page",
  },
  NC: {
    name: "North Carolina",
    url: "https://northcarolina.ballottrax.net/voter/",
    description: "North Carolina State Board of Elections, Ballottrax",
  },
  ND: {
    name: "North Dakota",
    url: "https://vip.sos.nd.gov/AbsenteeTracker.aspx",
    description: "North Dakota Secretary of State",
  },
  NE: {
    name: "Nebraska",
    url: "https://www.votercheck.necvr.ne.gov/voterview",
    description: "Nebraska Voter Information Lookup",
  },
  NH: {
    name: "New Hampshire",
    url: "https://app.sos.nh.gov/Public/AbsenteeBallot.aspx",
    description: "New Hampshire Secretary of State, Voter Information Look-up",
  },
  NJ: {
    name: "New Jersey",
    url: "https://www.nj.gov/state/elections/vote-track-my-ballot.shtml",
    description: "New Jersey Voter Information Portal",
  },
  NM: {
    name: "New Mexico",
    url: "https://voterportal.servis.sos.state.nm.us/WhereToVote.aspx?tab=AbsenteeTracker",
    description: "New Mexico Secretary of State",
  },
  NV: {
    name: "Nevada",
    url: "https://www.nvsos.gov/votersearch/",
    description: "Nevada Secretary of State",
  },
  NY: {
    name: "New York",
    url: "https://nysballot.elections.ny.gov/TrackMyBallot/Search",
    description: "New York State Board of Elections",
  },
  OH: {
    name: "Ohio",
    url: "https://www.sos.state.oh.us/elections/voters/toolkit/ballot-tracking/",
    description: "Ohio Secretary of State (each county has its own tool)",
  },
  OK: {
    name: "Oklahoma",
    url: "https://okvoterportal.okelections.us",
    description: "Oklahoma State Election Board, OK Voter Portal",
  },
  OR: {
    name: "Oregon",
    url: "https://secure.sos.state.or.us/orestar/vr/showVoterSearch.do",
    description: "Oregon Secretary of State",
  },
  PA: {
    name: "Pennsylvania",
    url: "https://www.pavoterservices.pa.gov/Pages/BallotTracking.aspx",
    description: "Pennsylvania Department of State",
    provisional: "https://www.pavoterservices.pa.gov/Pages/ProvisionalBallotSearch.aspx"
  },
  PR: {
    name: "Puerto Rico",
    hide: "yes",
    url: "",
    description: "",
  },
  RI: {
    name: "Rhode Island",
    url: "https://vote.sos.ri.gov/Home/UpdateVoterRecord?ActiveFlag=3",
    description: "Rhode Island Department of State",
  },
  SC: {
    name: "South Carolina",
    url: "https://info.scvotes.sc.gov/eng/voterinquiry/VoterInformationRequest.aspx?PageMode=AbsenteeInfo",
    description: "South Carolina Election Commission",
    provisional: "https://info.scvotes.sc.gov/eng/voterinquiry/VoterInformationRequest.aspx?PageMode=ProvisionalBallotInfo"
  },
  SD: {
    name: "South Dakota",
    url: "https://vip.sdsos.gov/VIPLogin.aspx",
    description: "South Dakota Secretary of State",
  },
  TN: {
    name: "Tennessee",
    url: "https://tnmap.tn.gov/voterlookup/",
    description: "Tennessee Secretary of State",
  },
  TX: {
    name: "Texas",
    url: "https://webservices.sos.state.tx.us/FPCA/index.aspx",
    description: "Military only (FPCA Ballot Tracker)",
    more: "If you are a Military voter or voting from overseas, you can track your ballot through the link here. If you are voting by mail for another reason and want to track the status of your ballot, contact your county elections office.",
    more_url: "https://www.sos.texas.gov/elections/voter/votregduties.shtml"
  },
  UT: {
    name: "Utah",
    url: "https://votesearch.utah.gov/voter-search/search/search-by-voter/track-mail-ballot",
    description: "Utah Lt. Govenor, Track My Ballot",
  },
  VA: {
    name: "Virginia",
    url: "https://ballotscout.org/partners/5a8f1161-23a0-4fa0-8ec9-3e090e97e9b3/va-search",
    description: "Commonwealth of Virginia, Ballot Scout",
  },
  VI: {
    name: "Virgin Islands",
    hide: "yes",
    url: "",
    description: "",
  },
  VT: {
    name: "Vermont",
    url: "https://mvp.vermont.gov/",
    description: "Vermont Secretary of State, My Voter Page",
  },
  WA: {
    name: "Washington",
    url: "https://voter.votewa.gov/WhereToVote.aspx",
    description: "Vote WA",
  },
  WI: {
    name: "Wisconsin",
    url: "https://myvote.wi.gov/en-us/TrackMyBallot",
    description: "MyVote Wisconsin",
  },
  WV: {
    name: "West Virginia",
    url: "https://services.sos.wv.gov/Elections/Voter/AbsenteeBallotTracking",
    description: "West Virginia Secretary of State",
  },
  WY: {
    name: "Wyoming",
    url: "https://sos.wyo.gov/Elections/Docs/WYCountyClerks_AbsRequest_VRChange.pdf",
    description: "Contact your county clerk for the status of your absentee ballot.",
  },
};
