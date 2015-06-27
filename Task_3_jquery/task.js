var getJSON = function(url, successHandler, errorHandler) {
    var xhr = typeof XMLHttpRequest != 'undefined'
      ? new XMLHttpRequest()
      : new ActiveXObject('Microsoft.XMLHTTP');
    xhr.open('get', url, true);
    xhr.responseType = 'json';
    xhr.onreadystatechange = function() {
        var status;
        var data;
        if (xhr.readyState == 4) { 
            status = xhr.status;
            if (status == 200) {
              successHandler && successHandler(xhr.response);
            } else {
              errorHandler && errorHandler(status);
            }
        }
    };
    xhr.send();
};


getJSON ('products.json', function(data) {
    var ulContainer = document.createElement('ul'), title, description, price, image,
        p = document.createElement('p'), pPrice = document.createElement('p'),  li = document.createElement('li'), 
        h6 = document.createElement('h6'), divControls = document.createElement('div'),
        aClose = document.createElement('a'), j = 0, img = document.createElement('img');


        for (j = 0; j < 4; j++) {
            li = document.createElement('li');
            p = document.createElement('p');
            h6 = document.createElement('h6');
            divControls = document.createElement('div');
            aClose = document.createElement('a');
            pPrice = document.createElement('p');
            img = document.createElement('img');

            ulContainer.className = 'container';
            li.setAttribute('class', 'notif notif-notice')
            h6.className = 'notif-title';
            divControls.className = 'notif-controls';
            aClose.className = 'notif-close';
            pPrice.className = 'priceTag';
            img.src = data[j].image;
            aClose.setAttribute('data-id', data[j].id);

            title = document.createTextNode(data[j].title);
            price = document.createTextNode(data[j].price);
            description = document.createTextNode(data[j].description);
            h6.appendChild(title);
            p.appendChild(description);
            p.appendChild(img);
            pPrice.appendChild(price);
            divControls.appendChild(aClose);
            li.appendChild(divControls);
            li.appendChild(h6);
            li.appendChild(p);
            li.appendChild(pPrice);
            ulContainer.appendChild(li);   
        };
        document.body.appendChild(ulContainer);

        var ul = document.querySelector('.container');
        ul.addEventListener('click', function(e) {
          e.target.parentNode.parentNode.setAttribute('style','display:none;');
        });
}, function(status) {
    alert('Something went wrong.');
});