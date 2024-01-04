$(function () {
  var includes = $('[data-include]')
  $.each(includes, function () {
    var file = 'reusable/' + $(this).data('include') + '.html'
    $(this).load(file)
  })
})
document.addEventListener('DOMContentLoaded', function () {
  const navbar = document.getElementById('navbar')

  window.addEventListener('scroll', function () {
    if (window.scrollY > 0) {
      // Scrolled  #0a0a2b  bg-[#0a0a2b] text-white
      navbar.classList.add('bg-opacity-80')
    } else {
      // Not scrolled
      navbar.classList.remove('bg-opacity-80')
    }
  })
})
document.addEventListener("DOMContentLoaded", function () {
  const openModalButton = document.getElementById("openModalButton");
  const videoModal = document.getElementById("videoModal");
  const closeModalButton = document.getElementById("closeModalButton");

  // Open modal
  openModalButton.addEventListener("click", function () {
    videoModal.classList.remove("hidden");
  });

  // Close modal
  closeModalButton.addEventListener("click", function () {
    videoModal.classList.add("hidden");
  });

  // Close modal when clicking outside the modal content
  videoModal.addEventListener("click", function (event) {
    if (event.target === videoModal) {
      videoModal.classList.add("hidden");
    }
  });
});

document.addEventListener('DOMContentLoaded', function () {
  const tabs = document.querySelectorAll('.collapsible-card')
  const contents = document.querySelectorAll('.tabcontent')
  const collapse = document.querySelectorAll('.collapse-content')

  var x = window.matchMedia('(max-width: 800px)')

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const target = document.querySelector(tab.dataset.tabTarget)
      hideAllTabs()
      expandForMobile(x, tab)
      tab.classList.add('open')
      target.classList.add('open')
    })
  })

  function hideAllTabs () {
    tabs.forEach(tab => {
      const target = document.querySelector(tab.dataset.tabTarget)
      tab.classList.remove('open')
    })
    contents.forEach(cont => {
      cont.classList.remove('open')
    })
  }

  function expandForMobile (x, target) {
    if (x.matches ) {
      tabs.forEach(tab => {
        const specificDiv = target.querySelector('.collapse-content')
        if(tab==target){
          if( (specificDiv.style.maxHeight == '0px'  || specificDiv.style.maxHeight == '')){
            specificDiv.style.maxHeight = `${specificDiv.scrollHeight}px`;
            
          }else{
          specificDiv.style.maxHeight = `0px`
          } 
        }else{
          const other = tab.querySelector('.collapse-content')
          other.style.maxHeight = `0px`
        }
      })
    
    }
  }


 
})

document.addEventListener('DOMContentLoaded', function () {
  var e = document.querySelector('.rejectCookies'),
    t = document.querySelector('#acceptCookies'),
    c = document.querySelector('.cookie'),
    n = document.querySelector('.cookie-modal-call'),
    o = document.querySelector('.text-mobile-show'),
    a = document.querySelector('.back-stroke'),
    i = document.querySelector('.show-more'),
    r = document.querySelector('#cookieModalNew .cookie-text'),
    d = document.querySelector('#cookieModalNew'),
    l = document.querySelector('#accept-all'),
    s = document.querySelector('#accept-necessary'),
    u = document.querySelector('#accept-statistic'),
    m = document.querySelector('#accept-marketing'),
    p = document.createElement('script')
  function k (e, t, c) {
    var n = null
    if (c) {
      var o = new Date()
      o.setTime(o.getTime() + 24 * c * 60 * 60 * 1e3), (n = o.getTime())
    }
    localStorage.setItem(e, JSON.stringify({ value: t, expires: n }))
  }
  function y (e) {
    var t = localStorage.getItem(e)
    if (!t) return null
    var c = JSON.parse(t)
    return c.expires && new Date().getTime() > c.expires
      ? (localStorage.removeItem(e), null)
      : c.value
  }
  function g (e) {
    return null != e
  }
  if (
    ((n.onclick = function () {
      return (c.style.display = 'none')
    }),
    (o.onclick = function () {
      return (c.style.display = 'none')
    }),
    (a.onclick = function () {
      return (c.style.display = 'block')
    }),
    (i.onclick = function () {
      r.classList.toggle('open'),
        r.classList.contains('open')
          ? (i.innerHTML = 'Show less')
          : (i.innerHTML = 'Show more')
    }),
    g(y('accept_cookie_stat')) ||
    g(y('decline_cookie')) ||
    g(y('accept_cookie_marketing')) ||
    g(y('accept_cookie')) ||
    'true' === localStorage.getItem('accept_cookie') ||
    'true' === localStorage.getItem('accept_cookie_stat') ||
    'true' === localStorage.getItem('accept_cookie_marketing')
      ? (c.style.display = 'none')
      : (c.style.display = 'block'),
    g(y('accept_cookie_stat')) || g(y('accept_cookie')))
  ) {
    var f = function () {
      dataLayer.push(arguments)
    }
    ;(window.dataLayer = window.dataLayer || []),
      f('js', new Date()),
      f('config', 'UA-185503460-2')
  }
  function w (e) {
    !(function () {
      if (window.gtmDidInit) return !1
      window.gtmDidInit = !0
      var e = document.createElement('script')
      ;(e.type = 'text/javascript'),
        (e.async = !0),
        (e.onload = function () {
          dataLayer.push({
            event: 'gtm.js',
            'gtm.start': new Date().getTime(),
            'gtm.uniqueEventId': 0
          })
        }),
        (e.src = 'https://www.googletagmanager.com/gtm.js?id=GTM-TW336KP'),
        document.head.appendChild(e)
    })(),
      e.currentTarget.removeEventListener(e.type, w)
  }
  function v () {
    function e () {
      dataLayer.push(arguments)
    }
    ;(window.dataLayer = window.dataLayer || []),
      e('js', new Date()),
      e('config', 'UA-185503460-2')
  }
  function h () {
    var e, t, c, n, o, a
    document.addEventListener('scroll', w),
      document.addEventListener('mousemove', w),
      document.addEventListener('touchstart', w),
      (e = window),
      (t = document),
      (c = 'script'),
      e.fbq ||
        ((n = e.fbq =
          function () {
            n.callMethod
              ? n.callMethod.apply(n, arguments)
              : n.queue.push(arguments)
          }),
        e._fbq || (e._fbq = n),
        (n.push = n),
        (n.loaded = !0),
        (n.version = '2.0'),
        (n.queue = []),
        ((o = t.createElement(c)).async = !0),
        (o.src = 'https://connect.facebook.net/en_US/fbevents.js'),
        (a = t.getElementsByTagName(c)[0]).parentNode.insertBefore(o, a)),
      fbq('init', '288837822779199'),
      fbq('track', 'PageView'),
      k('accept_cookie_marketing', !0, 90)
  }
  function _ () {
    v(), k('accept_cookie_stat', !0, 90)
  }
  g(y('decline_cookie')) ||
    ((p.src = 'https://www.googletagmanager.com/gtag/js?id=UA-185503460-2'),
    (p.async = !0),
    (p.type = 'text/javascript'),
    document.head.appendChild(p),
    v()),
    (g(y('accept_cookie_marketing')) || g(y('accept_cookie'))) &&
      (document.addEventListener('scroll', w),
      document.addEventListener('mousemove', w),
      document.addEventListener('touchstart', w)),
    (window.dataLayer = window.dataLayer || []),
    window.addEventListener('message', function (e) {
      e.data.event &&
        0 === e.data.event.indexOf('calendly') &&
        window.dataLayer.push({
          event: 'calendly',
          calendly_event: e.data.event.split('.')[1]
        })
    }),
    t.addEventListener('click', function () {
      h(), _(), k('accept_cookie', !0, 90), (c.style.display = 'none')
    }),
    u.addEventListener('input', function () {
      u.checked
        ? (document.querySelector('.consent-stat').style = 'color:#5152fb')
        : (document.querySelector('.consent-stat').style = 'color:#515254')
    }),
    m.addEventListener('input', function () {
      m.checked
        ? (document.querySelector('.consent-mark').style = 'color:#5152fb')
        : (document.querySelector('.consent-mark').style = 'color:#515254')
    }),
    u.addEventListener('input', function () {
      u.checked && u.checked && m.checked
        ? (e.textContent = 'Reject all')
        : (e.textContent = 'Accept selected')
    }),
    m.addEventListener('input', function () {
      m.checked && u.checked && m.checked
        ? (e.textContent = 'Reject all')
        : (e.textContent = 'Accept selected')
    }),
    (s.onclick = function () {
      k('accept_cookie', !0, 90), (c.style.display = 'none')
    }),
    (e.onclick = function () {
      'Reject all' === e.textContent &&
        (k('decline_cookie', !0, 1), bootstrap.Modal.getInstance(d).hide()),
        'Accept selected' === e.textContent &&
          (u.checked && _(),
          m.checked && h(),
          k('accept_cookie', !0, 90),
          bootstrap.Modal.getInstance(d).hide())
    }),
    (l.onclick = function () {
      u.checked && _(),
        m.checked && h(),
        k('accept_cookie', !0, 90),
        bootstrap.Modal.getInstance(d).hide()
    })
})
