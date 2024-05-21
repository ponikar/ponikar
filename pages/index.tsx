import type { GetStaticProps, NextPage } from "next";
import { Blogs } from "../src/components/Blogs";
import { Contact } from "../src/components/Contact";
import { Footer } from "../src/components/Footer";
import { Header } from "../src/components/Header";
import { Hero } from "../src/components/Hero";
import { Projects } from "../src/components/Projects";
import { Talks } from "../src/components/Talks";
import { BlogRes, CaseStudyType, ProjectRes } from "../@types/res";
import { getRequest } from "../src/utils/api";
import Head from "next/head";
import Script from "next/script";
// import { CaseStudy } from "../src/components/CaseStudy/CaseStudy";
// import { getCaseStudyData } from "../src/data/casestudy";

interface HomeProps {
  projects: ProjectRes[];
  blogs: BlogRes[];
  casestudies: CaseStudyType[];
}

const Home: NextPage<HomeProps> = ({ projects, blogs }) => {
  return (
    <>
      <Head>
        <title>Darshan Ponikar | The Journey of Full Stack Developer. 👨🏻‍💻</title>
        <link rel="icon" href="/favicon.png" />
        <meta
          name="description"
          content="Hi 👋. I am Darshan Ponikar, a Senior Software Engineer. I specialize
          in building Web/Mobile Applications using technologies like
          React/React Native. I am Passionate about building Products. I explore
          new things on weekends. DM me for a quick chat."
        />
        <meta
          name="keywords"
          content="web dev, javascripts, css3, typescript, react, nextjs, frontend, backend, developer, learn"
        />

        <meta
          property="og:title"
          content=" Darshan Ponikar | The Journey of Full Stack Developer. 👨🏻‍💻"
        />
        <meta property="og:image" content="/assets/imgs/cover_image.png" />
        <meta property="og:site_name" content="Darshan Ponikar" />

        <meta
          name="twitter:title"
          content="Darshan Ponikar | The Journey of Full Stack Developer. 👨🏻‍💻"
        />
        <meta
          name="twitter:description"
          content=" Hi 👋. I am Darshan Ponikar, a Senior Software Engineer. I specialize
          in building Web/Mobile Applications using technologies like
          React/React Native. I am Passionate about building Products. I explore
          new things on weekends. DM me for a quick chat."
        />

        <meta name="twitter:image" content="/assets/imgs/cover_image.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image:alt" content="Darshan's Portfolio Preview" />
        <link rel="preconnect" href="https://dev.visualwebsiteoptimizer.com" />
        <script type="text/javascript" id="vwoCode">
          {`window._vwo_code || (function() {
            var account_id=893374,
            version=2.1,
            settings_tolerance=2000,
            hide_element='body',
            hide_element_style = 'opacity:0 !important;filter:alpha(opacity=0) !important;background:none !important',
            /* DO NOT EDIT BELOW THIS LINE */
            f=false,w=window,d=document,v=d.querySelector('#vwoCode'),cK='_vwo_'+account_id+'_settings',cc={};try{var c=JSON.parse(localStorage.getItem('_vwo_'+account_id+'_config'));cc=c&&typeof c==='object'?c:{}}catch(e){}var stT=cc.stT==='session'?w.sessionStorage:w.localStorage;code={use_existing_jquery:function(){return typeof use_existing_jquery!=='undefined'?use_existing_jquery:undefined},library_tolerance:function(){return typeof library_tolerance!=='undefined'?library_tolerance:undefined},settings_tolerance:function(){return cc.sT||settings_tolerance},hide_element_style:function(){return'{'+(cc.hES||hide_element_style)+'}'},hide_element:function(){if(performance.getEntriesByName('first-contentful-paint')[0]){return''}return typeof cc.hE==='string'?cc.hE:hide_element},getVersion:function(){return version},finish:function(e){if(!f){f=true;var t=d.getElementById('_vis_opt_path_hides');if(t)t.parentNode.removeChild(t);if(e)(new Image).src='https://dev.visualwebsiteoptimizer.com/ee.gif?a='+account_id+e}},finished:function(){return f},addScript:function(e){var t=d.createElement('script');t.type='text/javascript';if(e.src){t.src=e.src}else{t.text=e.text}d.getElementsByTagName('head')[0].appendChild(t)},load:function(e,t){var i=this.getSettings(),n=d.createElement('script'),r=this;t=t||{};if(i){n.textContent=i;d.getElementsByTagName('head')[0].appendChild(n);if(!w.VWO||VWO.caE){stT.removeItem(cK);r.load(e)}}else{var o=new XMLHttpRequest;o.open('GET',e,true);o.withCredentials=!t.dSC;o.responseType=t.responseType||'text';o.onload=function(){if(t.onloadCb){return t.onloadCb(o,e)}if(o.status===200){_vwo_code.addScript({text:o.responseText})}else{_vwo_code.finish('&e=loading_failure:'+e)}};o.onerror=function(){if(t.onerrorCb){return t.onerrorCb(e)}_vwo_code.finish('&e=loading_failure:'+e)};o.send()}},getSettings:function(){try{var e=stT.getItem(cK);if(!e){return}e=JSON.parse(e);if(Date.now()>e.e){stT.removeItem(cK);return}return e.s}catch(e){return}},init:function(){if(d.URL.indexOf('__vwo_disable__')>-1)return;var e=this.settings_tolerance();w._vwo_settings_timer=setTimeout(function(){_vwo_code.finish();stT.removeItem(cK)},e);var t;if(this.hide_element()!=='body'){t=d.createElement('style');var i=this.hide_element(),n=i?i+this.hide_element_style():'',r=d.getElementsByTagName('head')[0];t.setAttribute('id','_vis_opt_path_hides');v&&t.setAttribute('nonce',v.nonce);t.setAttribute('type','text/css');if(t.styleSheet)t.styleSheet.cssText=n;else t.appendChild(d.createTextNode(n));r.appendChild(t)}else{t=d.getElementsByTagName('head')[0];var n=d.createElement('div');n.style.cssText='z-index: 2147483647 !important;position: fixed !important;left: 0 !important;top: 0 !important;width: 100% !important;height: 100% !important;background: white !important;';n.setAttribute('id','_vis_opt_path_hides');n.classList.add('_vis_hide_layer');t.parentNode.insertBefore(n,t.nextSibling)}var o='https://dev.visualwebsiteoptimizer.com/j.php?a='+account_id+'&u='+encodeURIComponent(d.URL)+'&vn='+version;if(w.location.search.indexOf('_vwo_xhr')!==-1){this.addScript({src:o})}else{this.load(o+'&x=true')}}};w._vwo_code=code;code.init();})();
           `}
        </script>
      </Head>
      <div className="h-full">
        <Header />
        <Hero />
        <Projects projects={projects} />
        {/* <CaseStudy casestudies={casestudies} /> */}
        <Blogs blogs={blogs} />
        <Talks />
        <Contact />
        <Footer />
      </div>
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  // const projects = await getRequest<ProjectRes[]>(
  //   "https://gh-pinned-repos.egoist.sh/?username=ponikar"
  // );

  const blogs = await getRequest<BlogRes[]>(
    "https://dev.to/api/articles?username=ponikar"
  );

  return {
    props: {
      projects: [
        {
          owner: "ponikar",
          repo: "p2p",
          link: "https://github.com/ponikar/p2p",
          description: "P2P meeting web application building in React",
          image: "https://opengraph.githubassets.com/1/ponikar/p2p",
          language: "TypeScript",
          languageColor: "#2b7489",
          stars: "2",
          forks: 0,
        },
        {
          owner: "ponikar",
          repo: "mememe",
          link: "https://github.com/ponikar/mememe",
          description: "Web base application let you build message memes.",
          image: "https://opengraph.githubassets.com/1/ponikar/mememe",
          language: "TypeScript",
          languageColor: "#2b7489",
          stars: "1",
          forks: 0,
        },
        {
          owner: "ponikar",
          repo: "basic-express-js",
          link: "https://github.com/ponikar/basic-express-js",
          description: "Working with Basic Concept of express js with Mongo DB",
          image:
            "https://opengraph.githubassets.com/1/ponikar/basic-express-js",
          language: "JavaScript",
          languageColor: "#f1e05a",
          stars: 0,
          forks: 0,
        },
        {
          owner: "ponikar",
          repo: "p2p-server",
          link: "https://github.com/ponikar/p2p-server",
          description:
            "Signaling Server for P2P Client with TypeScript Rocks and MongoDB",
          image: "https://opengraph.githubassets.com/1/ponikar/p2p-server",
          language: "TypeScript",
          languageColor: "#2b7489",
          stars: 0,
          forks: 0,
        },
        {
          owner: "ponikar",
          repo: "ponikar-archive",
          link: "https://github.com/ponikar/ponikar-archive",
          image: "https://opengraph.githubassets.com/1/ponikar/ponikar-archive",
          language: "TypeScript",
          languageColor: "#2b7489",
          stars: 0,
          forks: 0,
        },
      ],
      blogs: blogs.data,
    },
  };
};

export default Home;
