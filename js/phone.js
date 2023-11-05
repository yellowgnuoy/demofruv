        // //핸드폰 올라와라 효과
        // let observer = new IntersectionObserver((e)=>{
        //     e.forEach((box)=>{
        //         if (box.isIntersecting){
        //         box.target.style.transform = 'translateY(-30vw)';
        //         } else {
        //         box.target.style.transform = 'translateY(0)';
        //         }
        //     })
        // })

        // let makeimg = document.querySelector('.makeimg')
        // observer.observe(makeimg)

        let observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting && entry.boundingClientRect.top > 0) {
                    // 화면 위에서 스크롤하여 요소가 화면에 들어왔을 때 효과를 적용
                    entry.target.style.transform = 'translateY(-30vw)';
                    entry.target.style.opacity = 1;
                } else {
                    // 그 외의 경우에는 효과를 제거
                    entry.target.style.transform = 'translateY(0)';
                    entry.target.style.opacity = 0;
                }
            });
        }, { threshold: 0 });
        
        let makeimg = document.querySelector('.makeimg');
        observer.observe(makeimg);
        