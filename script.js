
function main(){
    gsap.to("#nav",{
        backgroundColor : "#000",
        height : "45px",
        duration : 0.2,
        scrollTrigger : {
            trigger : "#nav",
            scroller : "body",
            // markers : true,
            start : "-10%",
            end : "top -11%",
            scrub : 1,
        }
    })
    gsap.to("#main",{
        backgroundColor : "#000",
        scrollTrigger : {
            trigger : "#main",
            scroller : "body",
            // markers : true,
            start : "top -30%",
            end : "top -100%",
            scrub : 2,
        }
    })
}
function page1(){
    var tl1 = gsap.timeline();

    tl1.to("#page1 #main-img img", {
        top: "0",
        opacity : 1,
        duration : 1,
    },"A")
    // tl1.to("#page1 #main-text h1", {
    //     top: "0",
    //     opacity : 1,
    //     duration : 1,
    // },"A")
    // tl1.to("#page1 #main-text h1", {
    //     top: "0",
    //     opacity : 1,
    //     duration : 1,
    // },"A")
}
function page2(){
    var tl2 = gsap.timeline();

    tl2.to("#page2-img",{
        width : "45%",
        // duration : 0.2,
        scrollTrigger : {
            trigger : "#page2",
            scroller : "body",
            // markers : true,
            start : "top 60%",
            end : "top 11%",
            scrub : 2,
        }
    }, "b")
    tl2.to("#page2-text",{
        width : "45%",
        opacity: 1,
        // delay :1,
        duration : 0.2,
        scrollTrigger : {
            trigger : "#page2",
            scroller : "body",
            // markers : true,
            start : "top 50%",
            end : "top 11%",
            scrub : 2,
        }
    }, "b")
    tl2.to("#page2-text p",{
        width : "70%",
        opacity: 1,
        // delay :1,
        duration : 0.2,
        scrollTrigger : {
            trigger : "#page2",
            scroller : "body",
            // markers : true,
            start : "top 20%",
            end : "top 11%",
            scrub : 2,
        }
    },)
    tl2.to("#page2-text .page2-btn",{
        width : "30%",
        opacity: 1,
        // delay :1,
        duration : 0.2,
        scrollTrigger : {
            trigger : "#page2",
            scroller : "body",
            // markers : true,
            start : "top 10%",
            end : "top 11%",
            scrub : 1,
        }
    }, )
}
function page3(){
    var tl2 = gsap.timeline();

    tl2.to("#page3 .feature-box",{
        width : "70%",
        opacity : 1,
        // duration : 0.2,
        scrollTrigger : {
            trigger : "#page3",
            scroller : "body",
            // markers : true,
            start : "top 60%",
            end : "top 30%",
            scrub : 2,
        }
    }, "b")
}
function page4(){
    var tl2 = gsap.timeline();
    tl2.to("#page4-text h1",{
        opacity : 1,
        // delay : 1,
        scrollTrigger : {
            trigger : "#page4",
            scroller : "body",
            // markers : true,
            start : "top 70%",
            end : "top 50%",
            scrub : 2,
        }
    },"f")
    tl2.to("#page4-text p",{
        width : "90%",
        opacity : 1,
        // delay : 1,
        scrollTrigger : {
            trigger : "#page4",
            scroller : "body",
            // markers : true,
            start : "top 60%",
            end : "top 50%",
            scrub : 2,
        }
    },"f")
    tl2.to("#page4-text .page4-btn",{
        width : "30%",
        opacity : 1,
        // delay : 1,
        scrollTrigger : {
            trigger : "#page4",
            scroller : "body",
            // markers : true,
            start : "top 70%",
            end : "top 50%",
            scrub : 2,
        }
    },"f")

    tl2.to("#page4-img",{
        width : "50%",
        opacity : 1,
        scrollTrigger : {
            trigger : "#page4",
            scroller : "body",
            // markers : true,
            start : "top 70%",
            end : "top 50%",
            scrub : 2,
        }
    }, "b")
}

function page5() {
    var tl = gsap.timeline();

    tl.from("#page5 .main-head .heading5", {
        //   scale : 0,
        duration: 20,
        left: "100%",
        scrollTrigger: {
            trigger: "#page5",
            scroller: "body",
            // markers: true,
            scrub: 5,
            start: "top 40%",
        }
    }, "a")
    tl.from("#page5 .main-head .heading6", {
        //   scale : 0,
        duration: 10,
        right: "100%",
        scrollTrigger: {
            trigger: "#page5",
            scroller: "body",
            // markers: true,
            scrub: 5,
            start: "top 40%",
        }
    }, "a")
}

main();
page1();
page2();
page3();
page4();
page5();
