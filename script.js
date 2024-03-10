function locoScroll(){
  gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
el: document.querySelector(".main"),
smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the ".main" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy(".main", {
scrollTop(value) {
  return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
}, // we don't have to define a scrollLeft because we're only scrolling vertically.
getBoundingClientRect() {
  return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
},
// LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
pinType: document.querySelector(".main").style.transform ? "transform" : "fixed"
});





// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();
}

locoScroll()



let tl = gsap.timeline();{

    tl.from(".nav",{
        y:-60,
        ease :Expo.easeInOut,
        duration:1.6,
        delay:8
    }) 

    tl.from(".portfolio_pic",{
        // y:50,
        // scale:0,
        // rotate:1200,
        ease :Expo.easeInOut,
        duration:1,
    })

    tl.to(".boundingElem",{
        y:0,
        // scale:1,
        // rotate:720,
        ease :Expo.easeInOut,
        duration:1.5,
        delay:-2

    })

    
}




gsap.to(".Pbounding-n",{
    y:0,
    duration:1,
    scrollTrigger:{
        trigger:".Pbounding-n",
        scroller:".main",
        start:"35% 80%",
        end:"bottom 80%",
        // markers:true,
        scrub:2
    },
    
} )
gsap.to(".Pbounding-m",{
    y:0,
    duration:1,
    scrollTrigger:{
        trigger:".Pbounding-m",
        scroller:".main",
        start:"35% 80%",
        end:"bottom 80%",
        // markers:true,
        scrub:2
    },
    
} )


gsap.to(".Pbounding-a",{
    y:0,
    duration:1,
    scrollTrigger:{
        trigger:".Pbounding-a",
        scroller:".main",
        start:"35% 80%",
        end:"bottom 80%",
        // markers:true,
        scrub:2
    },
    
} )

gsap.to(".Pbounding-r",{
    y:0,
    duration:1,
    scrollTrigger:{
        trigger:".Pbounding-r",
        scroller:".main",
        start:"35% 80%",
        end:"bottom 80%",
        // markers:true,
        scrub:2
    },
    
} )

gsap.to(".Pbounding-h",{
    y:0,
    duration:1,
    scrollTrigger:{
        trigger:".Pbounding-h",
        scroller:".main",
        start:"35% 80%",
        end:"bottom 80%",
        // markers:true,
        scrub:2
    },
    
} )


 gsap.to(".rw_elem",{
    y:0,
    duration:1,
    scrollTrigger:{
        trigger:".rw_elem",
        scroller:".main",
        start:"35% 80%",
        end:"bottom 80%",
        // markers:true,
        scrub:2
    },
    
} )

function box1(){
    gsap.to(".box1",{
        y:"100px",
        duration:1,
        scrollTrigger:{
            trigger:".box1",
            scroller:".main",
            start:"35% 80%",
            end:"bottom 80%",
            // markers:true,
            scrub:4
        },
        
    } )
}

box1()
function box2(){
    gsap.to(".box2",{
        y:"-100px",
        duration:2,
        scrollTrigger:{
            trigger:".box2",
            scroller:".main",
            start:"35% 80%",
            end:"bottom 80%",
            // markers:true,
            scrub:4
        },
        
    } )
}
box2()

function box3(){
    gsap.to(".box3",{
        y:"100px",
        duration:1,
        scrollTrigger:{
            trigger:".box3",
            scroller:".main",
            start:"35% 80%",
            end:"bottom 80%",
            // markers:true,
            scrub:4
        },
        
    } )    
}
box3()

function box4(){
    gsap.to(".box4",{
        y:"-100px",
        duration:2,
        scrollTrigger:{
            trigger:".box4",
            scroller:".main",
            start:"35% 80%",
            end:"bottom 80%",
            // markers:true,
            scrub:4
        },
        
    } )
};

box4()





function circleEffect(){

  let circle = document.querySelector(".trailer");
  let page1  = document.querySelector(".page1")
  let page2  = document.querySelector(".page2")
  let page3  = document.querySelector(".page3")
  let elem  = document.querySelector(".elem")
  let elem2  = document.querySelector(".elem2")
  let elem3  = document.querySelector(".elem3")
  let elem4  = document.querySelector(".elem4")
//   let box  = document.querySelector(".elem4")
  let btn1  = document.querySelector(".more-works")
  let p1  = document.querySelector(".p1")
  let p2  = document.querySelector(".p2")
  let main  = document.querySelector(".main")
  


  main.addEventListener("mousemove",function(dets){
      gsap.to(circle,{
          x:dets.x,
          y:dets.y,
          ease: "power2.out"
      })
  })
  
  p1.addEventListener("mouseenter",function(){
      gsap.to(circle,{
          scale:4
      })
  
  })

  p1.addEventListener("mouseleave",function(){
      gsap.to(circle,{
          scale:1
      })
  
  })

  p2.addEventListener("mouseenter",function(){
      gsap.to(circle,{
          scale:4
      })
  
  })
  p2.addEventListener("mouseleave",function(){
      gsap.to(circle,{
          scale:1
      })
  
  })



  elem.addEventListener("mouseenter",function(){
      gsap.to(circle,{
          scale:4
      })
  
  })
  elem.addEventListener("mouseleave",function(){
      gsap.to(circle,{
          scale:1
      })
  
  })


  elem2.addEventListener("mouseenter",function(){
      gsap.to(circle,{
          scale:4,
      })
  
  })
  elem2.addEventListener("mouseleave",function(){
      gsap.to(circle,{
          scale:1
      })
  
  })

  elem3.addEventListener("mouseenter",function(){
      gsap.to(circle,{
          scale:4
      })
  
  })
  elem3.addEventListener("mouseleave",function(){
      gsap.to(circle,{
          scale:1
      })
  
  })


  elem4.addEventListener("mouseenter",function(){
      gsap.to(circle,{
          scale:4
      })
  
  })
  elem4.addEventListener("mouseleave",function(){
      gsap.to(circle,{
          scale:1
      })
  
  })


  btn1.addEventListener("mouseenter",function(){
      gsap.to(circle,{
          scale:4
      })
  
  })
  btn1.addEventListener("mouseleave",function(){
      gsap.to(circle,{
          scale:1
      })
  
  })












}


circleEffect()










let panels = gsap.utils.toArray(".panel")

    gsap.to(panels,{
    xPercent: -40 * (panels.length - 1),
    ease:"none",
    scrollTrigger:{  
    trigger:".page6",
    scroller:".main",
    // pin:true,
    scrub:1,
    // snap: 1 / (panels.length - 1),
    // end:() => "+=" + document.querySelector(".page5").offsetWidth

}})

let panel2 = gsap.utils.toArray(".panel2")

gsap.to(panel2,{
    xPercent:40*(panel2.length-1),
    ease:"none",
    scrollTrigger:{
    trigger:".page6",
    scroller:".main",
    scrub:1,
    // markers:true,
    // snap: 1/ (panel2.length - 1),
    // end:() => "+=" + document.querySelector(".page5").offsetWidth

}})


// gsap.to(".page3",{
//     top:"40%",
//     duration:2,
//     backgroundColor:"black",
//     color:"white",
//     scrollTrigger:{
//         trigger:".page3",
//         scroller:".main",
//         start:"35% 80%",
//         end:"bottom 80%",
//         markers:true,
//         scrub:4
//     },
    
// } )

// gsap.to(".page5",{
//     top:"40%",
//     duration:2,
//     backgroundColor:"black",
//     color:"white",
//     scrollTrigger:{
//         trigger:".page5",
//         scroller:".main",
//         start:"35% 80%",
//         end:"bottom 80%",
//         markers:true,
//         scrub:4
//     },
    
// } )

// gsap.to(".page8",{
//     top:"40%",
//     duration:2,
//     backgroundColor:"black",
//     color:"white",
//     scrollTrigger:{
//         trigger:".page5",
//         scroller:".main",
//         start:"35% 80%",
//         end:"bottom 80%",
//         markers:true,
//         scrub:4
//     },
    
// } )


gsap.to(".FboundingElem",{
    y:0,
    duration:1,
    scrollTrigger:{
        trigger:".FboundingElem",
        scroller:".main",
        start:"5% 80%",
        end:"bottom 80%",
        // markers:true,
        scrub:1
    },
    
} )
    

function updateClock() {
    var now = new Date();
    var hours = now.getHours();
    var minutes = now.getMinutes();
    var seconds = now.getSeconds();
    var ampm = hours >= 12 ? 'PM' : 'AM';

    // Convert to 12-hour format
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'

    // Add leading zeros to single-digit numbers
    hours = (hours < 10) ? "0" + hours : hours;
    minutes = (minutes < 10) ? "0" + minutes : minutes;
    seconds = (seconds < 10) ? "0" + seconds : seconds;
    
    var timeString = hours + ':' + minutes + ':' + seconds + ' ' + ampm;
    document.getElementById('clock').textContent = timeString;
  }
  setInterval(updateClock, 1000);
  updateClock();

function anim(){
    document.addEventListener("DOMContentLoaded",function(){
        const counter3 = document.querySelector(".counter-3");
        for(let i = 0; i < 2; i++){
            for(let j = 0; j < 10; j++){
                const div = document.createElement("div");
                div.className = "num";
                div.textContent = j;
                counter3.appendChild(div)
            }
        }
    
        const finalDiv = document.createElement('div');
        finalDiv.className = "num";
        finalDiv.textContent = "0";
        counter3.appendChild( finalDiv);
    
        function animate(counter, duration, delay = 0){
            const numHeight = counter.querySelector(".num").clientHeight;
            const totalDistance = (counter.querySelectorAll(".num").length - 1)*numHeight
    
            gsap.to(counter,{
                y:-totalDistance,
                duration:duration,
                delay:delay,
                case:'power2.inOut'
            })
        }
    
        animate(counter3,5);
        animate(document.querySelector(".counter-2"),6);
        animate(document.querySelector(".counter-1"),2),4;
    
    });
    
    gsap.to(".digit",{
        top:"-150px",
        stagger:{
            amount:0.25,
        },
        delay:5,
        duration:1,
        ease:"power4.inOut",
    })
    
    gsap.from(".loader-1",{
        width:0,
        duration:6,
        ease:"power2.inOut",
    });
    
    gsap.from(".loader-2",{
        width:0,
        delay:1.9,
        duration:5,
        ease:"power2.inOut",
    })
    
    gsap.from(".loader-3",{
        width:0,
        delay:1.9,
        duration:5,
        ease:"power2.inOut",
    })
    
    gsap.from(".loader-4",{
        width:0,
        delay:1.9,
        duration:5,
        ease:"power2.inOut",
    })
    
    gsap.to(".loader",{
       background:"none",
       delay:6,
       duartion:0.1,
    })
    
    
    
    gsap.to(".loader",{
        scale:60,
        duration:1,
        delay:7,
        ease:"power2.inOut"
     })
    
    gsap.to(".loader",{
       rotate:45,
       y:950,
       x:2000,
       duration:1,
       delay:7,
       ease:"power2.inOut"
    })
    
    gsap.to(".loader-screen",{
        opacity:0,
        duration:0.5,
        delay:7.5,
        ease:"power1.inOut",
        display : "none", 
    }
    )
}

anim()




