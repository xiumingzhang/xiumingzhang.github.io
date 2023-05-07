const DIFFUSIONRIG_PROJECT = "https://diffusionrig.github.io/";

const DISSERTATION_PDF = "https://drive.google.com/file/d/1-cUlfdSXbekzRZB4FO3OEmdSi3i-MoaT/view";

const NLT_PROJECT = "http://nlt.csail.mit.edu/";

const MOSCULP_PROJECT = "http://mosculp.csail.mit.edu/";
const MOSCULP_PHOTOS = "https://photos.app.goo.gl/HkTbsYtXQXxBo8up6";
const MOSCULP_FORBES = "https://www.forbes.com/sites/jenniferhicks/2018/09/25/these-researchers-turned-2d-videos-into-3d-motion-sculptures";
const MOSCULP_BBC = "https://www.bbc.com/news/av/technology-45552015/creating-3d-sculptures-from-2d-video-and-other-news";
const MOSCULP_MIT = "https://news.mit.edu/2018/creating-3-d-printed-motion-sculptures-from-2-d-videos-mit-csail-0919";
const MOSCULP_MIT_HOMEPAGE = "docs/news/mosculp_mit_homepage.png";

const GENRE_PROJECT = "http://genre.csail.mit.edu/";

const AD_PAPER = "http://dx.doi.org/10.1073/pnas.1611073113";
const AD_NUS = "http://news.nus.edu.sg/highlights/model-illuminates-alzheimers-disease";
const AD_PT = "https://www.psychologytoday.com/intl/blog/the-athletes-way/201610/alzheimers-study-links-triad-brain-areas-cognition";
const AD_MGH = "docs/news/ad_mgh.pdf";

const MIT_RED = "#A31F34";
const MIT_DARK_GRAY = "#8A8B8C";
const MIT_LIGHT_GRAY = "#C2C0BF";


function clickme(text, link) {
  document.write("<a target='_blank' href=" + link + ">" + text + "</a>");
}

function clickable(text, link) {
  document.write("<a class='lowkey' target='_blank' href=" + link + ">" + text + "</a>");
}

function text_button(text, link) {
  clickable("[" + text + "]", link);
}

function undef() {
  document.write("<font color='#FF0000'>UNDEFINED</font>");
}

function getPerson(id) {
  switch (id) {
    case "me":
      document.write("<u>Xiuming Zhang</u>");
      break;
    case "freeman_short":
      clickable("Bill Freeman", "https://billf.mit.edu/");
      break;
    case "freeman":
      clickable("William T. Freeman", "https://billf.mit.edu/");
      break;
    case "levoy":
      clickable("Marc Levoy", "https://graphics.stanford.edu/~levoy/");
      break;
    case "torralba":
      clickable("Antonio Torralba", "https://groups.csail.mit.edu/vision/torralbalab/");
      break;
    case "fanello":
      clickable("Sean Fanello", "http://www.seanfanello.it/");
      break;
    case "tiancheng":
      clickable("Tiancheng Sun", "http://kevinkingo.com/");
      break;
    case "rhemann":
      clickable("Christoph Rhemann", "https://scholar.google.com/citations?user=5D0_pjcAAAAJ");
      break;
    case "debevec":
      clickable("Paul Debevec", "http://www.pauldebevec.com/");
      break;
    case "ramamoorthi":
      clickable("Ravi Ramamoorthi", "http://cseweb.ucsd.edu/~ravir/");
      break;
    case "yunta":
      clickable("Yun-Ta Tsai", "https://scholar.google.com/citations?user=7fUcF9UAAAAJ");
      break;
    case "pratul":
      clickable("Pratul P. Srinivasan", "https://people.eecs.berkeley.edu/~pratul/");
      break;
    case "boyang":
      clickable("Boyang Deng", "https://boyangdeng.com/");
      break;
    case "barron_short":
      clickable("Jon Barron", "https://jonbarron.info/");
      break;
    case "barron":
      clickable("Jonathan T. Barron", "https://jonbarron.info/");
      break;
    case "tianfan":
      clickable("Tianfan Xue", "https://people.csail.mit.edu/tfxue/");
      break;
    case "yeo_short":
      clickable("Thomas Yeo", "https://sites.google.com/view/yeolab/thomas");
      break;
    case "yeo":
      clickable("B. T. Thomas Yeo", "https://sites.google.com/view/yeolab/thomas");
      break;
    case "jiayuan":
      clickable("Jiayuan Mao", "http://jiayuanm.com/");
      break;
    case "yikai":
      clickable("Yikai Li", "https://scholar.google.com/citations?user=0EVzwD8AAAAJ");
      break;
    case "tenenbaum":
      clickable("Joshua B. Tenenbaum", "http://web.mit.edu/cocosci/josh.html");
      break;
    case "jiajun":
      clickable("Jiajun Wu", "https://jiajunwu.com/");
      break;
    case "xuaner":
      clickable("Xuaner Zhang", "https://ceciliavision.github.io/");
      break;
    case "zhihao":
      clickable("Zhihao Xia", "https://likesum.github.io/");
      break;
    case "jebe":
      clickable("Lars Jebe", "https://lcjebe.github.io/");
      break;
    case "zhuowen":
      clickable("Zhuowen Tu", "https://pages.ucsd.edu/~ztu/");
      break;
    case "jacobs":
      clickable("David E. Jacobs", "http://graphics.stanford.edu/~dejacobs/");
      break;
    case "pandey":
      clickable("Rohit Pandey", "https://research.google/people/106687/");
      break;
    case "ren":
      clickable("Ren Ng", "https://www2.eecs.berkeley.edu/Faculty/Homepages/yirenng.html");
      break;
    case "siyi":
      clickable("Siyi Tang", "https://scholar.google.com/citations?user=dpRSfnoAAAAJ");
      break;
    case "nanbo":
      clickable("Nanbo Sun", "https://scholar.google.com.sg/citations?user=odaBvWAAAAAJ");
      break;
    case "mormino":
      clickable("Elizabeth C. Mormino", "https://med.stanford.edu/profiles/elizabeth-mormino");
      break;
    case "zhoutong":
      clickable("Zhoutong Zhang", "https://ztzhang.info/");
      break;
    case "chengkai":
      clickable("Chengkai Zhang", "https://scholar.google.com/citations?user=rChGGwgAAAAJ");
      break;
    case "dekel":
      clickable("Tali Dekel", "http://people.csail.mit.edu/talidekel/");
      break;
    case "owens":
      clickable("Andrew Owens", "http://andrewowens.com/");
      break;
    case "qiurui":
      clickable("Qiurui He", "https://scholar.google.com/citations?user=BxqV_RsAAAAJ");
      break;
    case "mueller":
      clickable("Stefanie Mueller", "http://stefaniemueller.org/");
      break;
    case "xingyuan":
      clickable("Xingyuan Sun", "http://people.csail.mit.edu/xingyuan/");
      break;
    case "sperling":
      clickable("Reisa A. Sperling", "https://www.nmr.mgh.harvard.edu/user/5647");
      break;
    case "sabuncu":
      clickable("Mert R. Sabuncu", "http://sabuncu.engineering.cornell.edu/");
      break;
    case "yifan":
      clickable("Yifan Wang", "https://homes.cs.washington.edu/~yifan1/");
      break;
    case "holynski":
      clickable("Aleksander Holynski", "https://homes.cs.washington.edu/~holynski/");
      break;
    case "liyuan":
      clickable("Liyuan Li", "https://scholar.google.com/citations?user=_R7z25AAAAAJ");
      break;
    case "steven":
      clickable("Steven Liu", "http://people.csail.mit.edu/stevenliu/");
      break;
    case "richard":
      clickable("Richard Zhang", "https://richzhang.github.io/");
      break;
    case "russell":
      clickable("Bryan Russell", "http://bryanrussell.org/");
      break;
    case "junyan":
      clickable("Jun-Yan Zhu", "https://www.cs.cmu.edu/~junyanz/");
      break;
    case "tancik":
      clickable("Matthew Tancik", "https://matthewtancik.com/");
      break;
    case "mildenhall":
      clickable("Ben Mildenhall", "https://people.eecs.berkeley.edu/~bmild/");
      break;
    case "orts":
      clickable("Sergio Orts-Escolano", "https://www.dtic.ua.es/~sorts/");
      break;
    case "davidson":
      clickable("Philip Davidson", "https://dl.acm.org/profile/99659224296");
      break;
    case "snavely":
      clickable("Noah Snavely", "http://www.cs.cornell.edu/~snavely/");
      break;
    case "zexiang":
      clickable("Zexiang Xu", "https://cseweb.ucsd.edu/~zex014/");
      break;
    case "yu":
      clickable("Yu Xia", "http://yxia.me/");
      break;
    case "ruizhi":
      clickable("Ruizhi Liao", "http://people.csail.mit.edu/ruizhi/");
      break;
    case "dorfman":
      clickable("Jason Dorfman", "https://people.csail.mit.edu/jdorfman/");
      break;
    default:
      undef();
  }
}

function getVenue(id) {
  switch (id) {
    case "iccv":
      clickable("ICCV", "https://en.wikipedia.org/wiki/International_Conference_on_Computer_Vision");
      break;
    case "nips":
      clickable("NeurIPS", "https://en.wikipedia.org/wiki/Conference_on_Neural_Information_Processing_Systems");
      break;
    case "uist":
      clickable("UIST", "https://en.wikipedia.org/wiki/ACM_Symposium_on_User_Interface_Software_and_Technology");
      break;
    case "eccv":
      clickable("ECCV", "https://en.wikipedia.org/wiki/European_Conference_on_Computer_Vision");
      break;
    case "cvpr":
      clickable("CVPR", "https://en.wikipedia.org/wiki/Conference_on_Computer_Vision_and_Pattern_Recognition");
      break;
    case "tog":
      clickable("TOG", "https://en.wikipedia.org/wiki/ACM_Transactions_on_Graphics");
      break;
    case "siggraph":
      clickable("SIGGRAPH", "https://en.wikipedia.org/wiki/SIGGRAPH");
      break;
    case "siggraph_asia":
      clickable("SIGGRAPH Asia", "https://en.wikipedia.org/wiki/SIGGRAPH");
      break;
    case "pnas":
      clickable("PNAS", "https://en.wikipedia.org/wiki/Proceedings_of_the_National_Academy_of_Sciences_of_the_United_States_of_America");
      break;
    case "ismrm":
      clickable("ISMRM", "https://en.wikipedia.org/wiki/International_Society_of_Magnetic_Resonance_in_Medicine");
      break;
    default:
      undef();
  }
}

function getAffli(id) {
  switch (id) {
    case "tesla":
      clickable("Tesla", "https://www.tesla.com");
      break;
    case "tesla_ap":
      clickable("Tesla Autopilot", "https://www.tesla.com/autopilot");
      break;
    case "adobe":
      clickable("Adobe", "https://www.adobe.com/");
      break;
    case "csail":
      clickable("Computer Science and Artificial Intelligence Laboratory (CSAIL)", "http://www.csail.mit.edu");
      break;
    case "csail_short":
      clickable("MIT CSAIL", "http://www.csail.mit.edu");
      break;
    case "mit":
      clickable("Massachusetts Institute of Technology (MIT)", "http://www.mit.edu");
      break;
    case "mit_short":
      clickable("MIT", "http://www.mit.edu");
      break;
    case "google_research":
      clickable("Google Research", "https://ai.google/");
      break;
    case "nus":
      clickable("National University of Singapore", "https://www.nus.edu.sg/");
      break;
    case "i2r":
      clickable("Institute for Infocomm Research", "https://www.a-star.edu.sg/i2r");
      break;
    case "waterloo":
      clickable("University of Waterloo", "https://uwaterloo.ca/");
      break;
    default:
      undef();
  }
}

function getNews(id) {
  switch (id) {
    case "mosculp_bbc":
      clickme("BBC", MOSCULP_BBC);
      break;
    case "mosculp_forbes":
      clickme("Forbes", MOSCULP_FORBES);
      break;
    case "mosculp_mit":
      clickme("MIT", MOSCULP_MIT);
      break;
    case "mosculp_homepage":
      clickme("9/19 MIT Homepage", MOSCULP_MIT_HOMEPAGE);
      break;
    case "ad_pt":
      clickme("Psychology Today", AD_PT);
      break;
    case "ad_mgh":
      clickme("MGH/HMS", AD_MGH);
      break;
    case "ad_nus":
      clickme("NUS", AD_NUS);
      break;
    default:
      undef();
  }
}

function paper(link) {
  text_button("paper", link);
}

function poster(link) {
  text_button("poster", link);
}

function video(link) {
  text_button("video", link);
}

function talk(link) {
  text_button("talk", link);
}

function thesis(link) {
  text_button("thesis", link);
}

function code(link) {
  text_button("code", link);
}

function demo(link) {
  text_button("demo", link);
}

function doc(link) {
  text_button("doc", link);
}

function supp(link) {
  text_button("supp", link);
}

function project(link) {
  text_button("project", link);
}

function bibtex(link) {
  text_button("bibtex", link);
}

function patent(link) {
  text_button("patent", link);
}

function hl(text) {
  document.write(`<font color=${MIT_RED}>${text}</font>`);
}
