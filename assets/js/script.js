const script = document.createElement('script');
script.src = 'https://code.jquery.com/jquery-3.6.0.min.js';

script.onload = function() { 
    $(document).ready(function() {
    $('body').append(`
        <header id="site-header"></header>
        <nav id="main-nav"></nav>
        <div class="container">
            <div class="search-container">
                <input type="text" id="product-search" placeholder="Ürün ara...">
            </div>
            <main id="product-list-container"></main>
        </div>
        <footer id="site-footer">
            <p>&copy; 2025 Ürün Kataloğu. Tüm hakları saklıdır.</p>
        </footer>
        <div id="popup-overlay"></div>
        <div id="popup-container"></div>
    `);

    $('body').css({
        'font-family': '"Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
        'background': 'linear-gradient(135deg, #050510 0%, #1a1a35 50%, #10101e 100%)',
        'background-attachment': 'fixed',
        'color': '#e0e0e0',
        'line-height': '1.6',
        'margin': '0',
        'padding': '0',
        'min-height': '100vh',
        'display': 'flex',
        'flex-direction': 'column'
    });

    $('#site-header').css({
        'background': 'linear-gradient(to right, #0a0015, #1a0033, #2d0053)',
        'color': '#ffffff',
        'padding': '20px 0',
        'text-align': 'center',
        'box-shadow': '0 4px 10px rgba(0,0,0,0.7)'
    });

    $('#site-header').html(`
        <div class="header-content" style="
            position: relative;
            z-index: 5;
            max-width: 1200px;
            margin: 0 auto;
            width: 90%;
            display: flex;
            justify-content: space-between;
            align-items: center;
        ">
            <div class="logo" style="
                font-size: 2.2rem;
                font-weight: 700;
                color: white;
                display: flex;
                align-items: center;
            ">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style="margin-right: 10px;">
                    <path d="M21 16V8H18V16H21Z" fill="#7a00ff"/>
                    <path d="M16 16V4H13V16H16Z" fill="#7a00ff"/>
                    <path d="M11 16V4H8V16H11Z" fill="#7a00ff"/>
                    <path d="M6 16V8H3V16H6Z" fill="#7a00ff"/>
                    <path d="M4.5 18C3.67 18 3 18.67 3 19.5C3 20.33 3.67 21 4.5 21C5.33 21 6 20.33 6 19.5C6 18.67 5.33 18 4.5 18Z" fill="white"/>
                    <path d="M9.5 18C8.67 18 8 18.67 8 19.5C8 20.33 8.67 21 9.5 21C10.33 21 11 20.33 11 19.5C11 18.67 10.33 18 9.5 18Z" fill="white"/>
                    <path d="M14.5 18C13.67 18 13 18.67 13 19.5C13 20.33 13.67 21 14.5 21C15.33 21 16 20.33 16 19.5C16 18.67 15.33 18 14.5 18Z" fill="white"/>
                    <path d="M19.5 18C18.67 18 18 18.67 18 19.5C18 20.33 18.67 21 19.5 21C20.33 21 21 20.33 21 19.5C21 18.67 20.33 18 19.5 18Z" fill="white"/>
                </svg>
                hepsiorada
            </div>
            
            <div class="header-actions" style="
                display: flex;
                gap: 20px;
                align-items: center;
            ">
                <div style="
                    display: flex;
                    align-items: center;
                    color: rgba(255,255,255,0.8);
                    font-size: 14px;
                ">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="margin-right: 5px;">
                        <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
                        <circle cx="12" cy="10" r="3"></circle>
                    </svg>
                    Mağazalar
                </div>
                
                <div style="
                    display: flex;
                    align-items: center;
                    color: rgba(255,255,255,0.8);
                    font-size: 14px;
                ">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="margin-right: 5px;">
                        <path d="M19 7v10a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V7"></path>
                        <rect width="20" height="5" x="2" y="2" rx="2"></rect>
                        <path d="M12 12v6"></path>
                        <path d="M15 12v6"></path>
                        <path d="M9 12v6"></path>
                    </svg>
                    Sepetim
                </div>
                
                <div style="
                    display: flex;
                    align-items: center;
                    color: rgba(255,255,255,0.8);
                    font-size: 14px;
                ">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="margin-right: 5px;">
                        <path d="M18 20a2 2 0 0 0 1-3.75V9a7 7 0 1 0-14 0v7.25A2 2 0 0 0 6 20"></path>
                        <path d="M10 20h4"></path>
                        <path d="M2 8h20"></path>
                    </svg>
                    Bildirimler
                </div>
                
                <div style="
                    background: linear-gradient(90deg, #7a00ff, #8e31ff);
                    color: white;
                    padding: 8px 15px;
                    border-radius: 4px;
                    font-weight: 500;
                    cursor: pointer;
                    font-size: 14px;
                    display: flex;
                    align-items: center;
                    box-shadow: 0 2px 10px rgba(122, 0, 255, 0.3);
                ">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="margin-right: 5px;">
                        <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
                        <circle cx="12" cy="7" r="4"></circle>
                    </svg>
                    Giriş Yap
                </div>
            </div>
        </div>
    `);

    $('#main-nav').css({
        'background': 'linear-gradient(to right, #14002a, #200040)',
        'padding': '0',
        'box-shadow': '0 4px 15px rgba(0,0,0,0.5)',
        'position': 'sticky',
        'top': '0',
        'z-index': '100'
    }).html(`
        <div class="nav-container" style="
            display: flex;
            justify-content: center;
            max-width: 1200px;
            margin: 0 auto;
            position: relative;
        ">
            <ul style="
                display: flex;
                list-style: none;
                margin: 0;
                padding: 0;
                flex-wrap: wrap;
                justify-content: center;
            ">
                <li class="category-item active" data-category="all" style="
                    padding: 15px 25px;
                    color: #ffffff;
                    cursor: pointer;
                    font-weight: 500;
                    position: relative;
                    transition: all 0.3s ease;
                ">Tümü</li>
                <li class="category-item" data-category="phone" style="
                    padding: 15px 25px;
                    color: #a0a0a0;
                    cursor: pointer;
                    font-weight: 500;
                    position: relative;
                    transition: all 0.3s ease;
                ">Telefonlar</li>
                <li class="category-item" data-category="laptop" style="
                    padding: 15px 25px;
                    color: #a0a0a0;
                    cursor: pointer;
                    font-weight: 500;
                    position: relative;
                    transition: all 0.3s ease;
                ">Laptoplar</li>
                <li class="category-item" data-category="tablet" style="
                    padding: 15px 25px;
                    color: #a0a0a0;
                    cursor: pointer;
                    font-weight: 500;
                    position: relative;
                    transition: all 0.3s ease;
                ">Tabletler</li>
                <li class="category-item" data-category="accessories" style="
                    padding: 15px 25px;
                    color: #a0a0a0;
                    cursor: pointer;
                    font-weight: 500;
                    position: relative;
                    transition: all 0.3s ease;
                ">Aksesuarlar</li>
            </ul>
        </div>
    `);

    $('.category-item').hover(
        function() {
            if(!$(this).hasClass('active')) {
                $(this).css('color', '#ffffff');
                $(this).css('background-color', 'rgba(122, 0, 255, 0.2)');
            }
        }, 
        function() {
            if(!$(this).hasClass('active')) {
                $(this).css('color', '#a0a0a0');
                $(this).css('background-color', 'transparent');
            }
        }
    );

    $('.category-item.active').css({
        'color': '#ffffff',
        'background-color': 'rgba(122, 0, 255, 0.4)',
        'border-bottom': '3px solid #6000cc'
    });

    $('.category-item').on('click', function() {
        $('.category-item').removeClass('active').css({
            'color': '#a0a0a0',
            'background-color': 'transparent',
            'border-bottom': 'none'
        });
        
        $(this).addClass('active').css({
            'color': '#ffffff',
            'background-color': 'rgba(122, 0, 255, 0.4)',
            'border-bottom': '3px solid #6000cc'
        });
        
        const category = $(this).data('category');
        
        if(category === 'all') {
            $('.product-card').show();
        } else {
            $('.product-card').each(function() {
                const productName = $(this).find('h3').text().toLowerCase();
                
                if(category === 'phone' && productName.includes('telefon')) {
                    $(this).show();
                } else if(category === 'laptop' && productName.includes('laptop')) {
                    $(this).show();
                } else if(category === 'tablet' && productName.includes('tablet')) {
                    $(this).show();
                } else if(category === 'accessories' && (
                    productName.includes('kulaklık') || 
                    productName.includes('saat') || 
                    productName.includes('kamera')
                )) {
                    $(this).show();
                } else {
                    $(this).hide();
                }
            });
        }
    });

    $('.container').css({
        'width': '90%',
        'max-width': '1200px',
        'margin': '0 auto',
        'padding': '20px 0',
        'flex': '1'
    });

    $('.search-container').css({
        'margin': '20px auto 30px',
        'max-width': '600px',
        'position': 'relative'
    });

    $('#product-search').css({
        'width': '100%',
        'padding': '15px 20px',
        'border': 'none',
        'border-radius': '50px',
        'font-size': '16px',
        'box-shadow': '0 4px 10px rgba(0,0,0,0.5)',
        'outline': 'none',
        'transition': 'all 0.3s ease',
        'background-color': '#14002a',
        'color': '#e0e0e0'
    }).attr('placeholder', 'Ürün ara...').on('focus', function() {
        $(this).css('box-shadow', '0 6px 15px rgba(122, 0, 255, 0.3)');
    }).on('blur', function() {
        $(this).css('box-shadow', '0 4px 10px rgba(0,0,0,0.3)');
    }).on('input', function() {
        const searchTerm = $(this).val().toLowerCase();
        $('.product-card').each(function() {
            const productName = $(this).find('h3').text().toLowerCase();
            if (productName.includes(searchTerm)) {
                $(this).show();
            } else {
                $(this).hide();
            }
        });
    });

    $('#product-list-container').css({
        'display': 'grid',
        'grid-template-columns': 'repeat(auto-fill, minmax(280px, 1fr))',
        'gap': '30px',
        'padding': '30px',
        'background': 'rgba(15, 15, 25, 0.7)',
        'backdrop-filter': 'blur(10px)',
        'border-radius': '12px',
        'box-shadow': '0 8px 32px rgba(0, 0, 0, 0.5)',
        'margin-top': '30px'
    });

    $('#site-footer').css({
        'background': 'linear-gradient(to right, #0a0015, #1a0033, #2d0053)',
        'color': '#a0a0a0',
        'text-align': 'center',
        'padding': '20px',
        'margin-top': '30px',
        'border-top': '1px solid rgba(255,255,255,0.1)'
    });

    $('#popup-overlay').css({
        'position': 'fixed',
        'top': '0',
        'left': '0',
        'width': '100%',
        'height': '100%',
        'background-color': 'rgba(0,0,0,0.75)',
        'backdrop-filter': 'blur(5px)',
        'display': 'none',
        'z-index': '998',
        'opacity': '0',
        'transition': 'opacity 0.3s ease'
    });

    $('#popup-container').css({
        'position': 'fixed',
        'top': '50%',
        'left': '50%',
        'transform': 'translate(-50%, -50%) scale(0.95)',
        'background-color': 'rgba(10, 10, 21, 0.85)',
        'padding': '0',
        'border-radius': '10px',
        'box-shadow': '0 15px 30px rgba(0,0,0,0.5)',
        'z-index': '999',
        'max-width': '800px',
        'width': '90%',
        'max-height': '90vh',
        'overflow': 'hidden',
        'display': 'none',
        'opacity': '0',
        'transition': 'all 0.3s ease',
        'color': '#e0e0e0',
        'backdrop-filter': 'blur(10px)'
    });

    if (window.matchMedia("(max-width: 768px)").matches) {
        $('#product-list-container').css({
            'grid-template-columns': 'repeat(auto-fill, minmax(220px, 1fr))'
        });
    }

    $.ajax({
        url: '../../data/products.json',
        dataType: 'json',
        success: function(data) {
            listProducts(data);
        },
        error: function(xhr, status, error) {
            console.error('Veri yükleme hatası:', error);
            $('#product-list-container').html('<div style="text-align: center; padding: 30px; color: #ff6b6b; background-color: #2d2d2d; border-radius: 8px;"><h3>Üzgünüz!</h3><p>Ürünler yüklenirken bir hata oluştu. Lütfen daha sonra tekrar deneyin.</p></div>');
        }
    });

    $('#popup-overlay').on('click', closePopup);
    });
    
    function listProducts(products) {
    $.each(products, function(index, product) {
        const productCard = $('<div class="product-card"></div>');
        
        const discountRate = product.discountRate || 0;
        let discountAmount = 0;
        let discount_price = product.price;
        
        if (discountRate > 0) {
            const priceValue = parseInt(product.price.replace(/[^0-9]/g, ''));
            
            discountAmount = Math.round(priceValue * discountRate / 100);
            
            const discountedPriceValue = priceValue - discountAmount;
            
            discount_price = discountedPriceValue.toLocaleString('tr-TR') + ' TL';
        }
        
        productCard.css({
            'background-color': '#2d2d2d',
            'border-radius': '12px',
            'box-shadow': '0 5px 15px rgba(0,0,0,0.2)',
            'overflow': 'hidden',
            'transition': 'all 0.3s ease',
            'position': 'relative',
            'display': 'flex',
            'flex-direction': 'column',
            'height': '100%'
        });

        if (discountRate > 0) {
            productCard.append(`
                <div style="position: absolute; top: 15px; right: 15px; background-color: #ff6b6b; color: white; padding: 5px 10px; border-radius: 50px; font-size: 12px; font-weight: bold; z-index: 1;">%${discountRate} İndirim</div>
            `);
        }

        productCard.append(`
            <div class="product-image" style="position: relative; padding-top: 75%; overflow: hidden; background-color: #252525;">
                <img src="assets/images/${product.image}" alt="${product.name}" style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; object-fit: contain; transition: transform 0.5s ease;">
            </div>
            <div style="padding: 20px; flex-grow: 1; display: flex; flex-direction: column;">
                <h3 style="margin: 0 0 10px; font-size: 18px; font-weight: 600; color: #e0e0e0;">${product.name}</h3>
                ${discountRate > 0 ? 
                    `<div style="margin: 0 0 15px;">
                        <p style="margin: 0 0 5px; font-weight: 400; color: #a0a0a0; font-size: 16px; text-decoration: line-through;">${product.price}</p>
                        <p style="margin: 0; font-weight: 700; color: #ff6b6b; font-size: 20px;">${discount_price}</p>
                        <span style="font-size: 13px; color: #69db7c; font-weight: 500;">${discountAmount.toLocaleString('tr-TR')} TL tasarruf</span>
                    </div>` : 
                    `<p style="margin: 0 0 15px; font-weight: 700; color: #e0e0e0; font-size: 20px;">${product.price}</p>`
                }
                <p style="margin: 0 0 15px; color: #a0a0a0; font-size: 14px; flex-grow: 1;">${product.detail.substring(0, 75)}...</p>
                <div style="display: flex; justify-content: space-between; align-items: center; margin-top: auto;">
                    <button class="detail-btn" style="background-color: #7a00ff; color: white; border: none; padding: 8px 15px; border-radius: 5px; cursor: pointer; font-weight: 500; transition: all 0.2s ease;">Detay Gör</button>
                    <a href="${product.link}" target="_blank" style="color: #a0a0a0; text-decoration: none; font-size: 14px; display: flex; align-items: center;">
                        <span style="margin-right: 5px;">Ürün Sayfası</span>
                        <span style="font-size: 18px;">→</span>
                    </a>
                </div>
            </div>
        `);

        productCard.hover(
            function() {
                $(this).css({
                    'transform': 'translateY(-8px)',
                    'box-shadow': '0 15px 30px rgba(0,0,0,0.3)'
                });
                $(this).find('img').css('transform', 'scale(1.05)');
                $(this).find('.detail-btn').css('background-color', '#8e2de2');
            },
            function() {
                $(this).css({
                    'transform': 'translateY(0)',
                    'box-shadow': '0 5px 15px rgba(0,0,0,0.2)'
                });
                $(this).find('img').css('transform', 'scale(1)');
                $(this).find('.detail-btn').css('background-color', '#7a00ff');
            }
        );

        productCard.find('.detail-btn').on('click', function() {
            openPopup(product, discountRate, discount_price);
        });

        $('#product-list-container').append(productCard);
    });
    }
    
    function openPopup(product, discountRate = 0, discount_price = null) {
    $('#popup-container').html(`
        <div style="position: relative; height: 90vh; overflow-y: auto; padding: 30px;">
            <button id="close-popup" style="position: sticky; top: 15px; right: 15px; float: right; background: none; border: none; font-size: 24px; color: #a0a0a0; cursor: pointer; transition: color 0.2s ease; z-index: 2;">&times;</button>
            
            <div style="display: grid; grid-template-columns: 1fr 1.5fr; gap: 30px;">
                <div>
                    <div style="border-radius: 8px; overflow: hidden; box-shadow: 0 5px 15px rgba(0,0,0,0.3); position: relative; max-height: 400px;">
                        <img src="assets/images/${product.image}" alt="${product.name}" style="width: 100%; height: 100%; object-fit: contain; display: block;">
                        ${discountRate > 0 ? `<div style="position: absolute; top: 15px; right: 15px; background-color: #ff6b6b; color: white; padding: 5px 10px; border-radius: 50px; font-size: 12px; font-weight: bold; z-index: 1;">%${discountRate} İndirim</div>` : ''}
                    </div>
                    
                    <div style="margin-top: 20px; background-color: #252525; padding: 15px; border-radius: 8px;">
                        <h4 style="margin: 0 0 10px; color: #e0e0e0; font-size: 16px;">Ürün Özellikleri</h4>
                        <ul style="margin: 0; padding-left: 20px; color: #a0a0a0;">
                            <li style="margin-bottom: 8px;">Hızlı Teslimat</li>
                            <li style="margin-bottom: 8px;">2 Yıl Garanti</li>
                            <li style="margin-bottom: 8px;">Ücretsiz İade</li>
                            <li>7/24 Destek</li>
                        </ul>
                    </div>
                </div>
                
                <div>
                    <h2 style="color: #e0e0e0; margin-top: 0; margin-bottom: 10px; font-size: 28px; font-weight: 700;">${product.name}</h2>
                    
                    <div style="display: flex; align-items: center; margin-bottom: 20px;">
                        <div style="display: flex; color: #ffd43b; font-size: 18px; margin-right: 15px;">
                            ★★★★<span style="color: #4d4d4d;">★</span>
                        </div>
                        <span style="color: #a0a0a0; font-size: 14px;">(120 Değerlendirme)</span>
                    </div>
                    
                    ${discountRate > 0 ? 
                    `<div style="margin-bottom: 20px;">
                        <p style="margin: 0 0 5px; font-weight: 400; color: #a0a0a0; font-size: 18px; text-decoration: line-through;">${product.price}</p>
                        <div style="display: flex; align-items: center;">
                            <p style="font-size: 28px; font-weight: 700; color: #ff6b6b; margin: 0;">${discount_price}</p>
                            <span style="margin-left: 10px; background-color: #ff6b6b; color: white; padding: 3px 8px; border-radius: 4px; font-size: 14px;">%${discountRate} İndirim</span>
                        </div>
                        <p style="margin: 5px 0 0; font-size: 15px; color: #69db7c;">
                            ${parseInt(product.price.replace(/[^0-9]/g, '')) - parseInt(discount_price.replace(/[^0-9]/g, ''))} TL tasarruf ediyorsunuz
                        </p>
                    </div>` : 
                    `<p style="font-size: 28px; font-weight: 700; color: #e0e0e0; margin-bottom: 20px;">${product.price}</p>`}
                    
                    <div style="background-color: #252525; border-left: 4px solid #7a00ff; padding: 15px; margin-bottom: 25px; border-radius: 0 8px 8px 0;">
                        <p style="margin: 0; font-size: 15px; color: #a0a0a0;">
                            <strong style="color: #e0e0e0;">Stok Durumu:</strong> Hızlı Kargo ile Hemen Teslim
                        </p>
                    </div>
                    
                    <h3 style="font-size: 18px; margin-bottom: 10px; color: #e0e0e0;">Ürün detailları</h3>
                    <p style="line-height: 1.7; color: #a0a0a0; margin-bottom: 25px;">${product.detail}</p>
                    
                    <div style="display: flex; gap: 15px; position: sticky; bottom: 0; background-color: rgba(10, 10, 21, 0.95); padding: 20px 0; margin: 0 -30px -30px -30px; padding-left: 30px; padding-right: 30px;">
                        <a href="${product.link}" target="_blank" style="flex: 1; background-color: #7a00ff; color: white; text-decoration: none; padding: 12px 25px; border-radius: 5px; font-weight: 600; text-align: center; transition: all 0.2s ease; display: inline-block;">Satın Al</a>
                        <button style="flex: 1; background-color: #252525; color: #e0e0e0; border: 2px solid #3d3d3d; padding: 12px 25px; border-radius: 5px; font-weight: 600; cursor: pointer; transition: all 0.2s ease;">Sepete Ekle</button>
                    </div>
                </div>
            </div>
        </div>
    `);

    if (window.matchMedia("(max-width: 768px)").matches) {
        $('#popup-container').find('div[style*="grid-template-columns"]').css({
            'grid-template-columns': '1fr',
            'gap': '20px'
        });
    }

    $('#close-popup').on('click', closePopup).hover(
        function() { $(this).css('color', '#e0e0e0'); },
        function() { $(this).css('color', '#a0a0a0'); }
    );

    $('#popup-overlay').css('display', 'block').animate({
        opacity: 1
    }, 300);
    
    $('#popup-container').css('display', 'block').animate({
        opacity: 1,
        transform: 'translate(-50%, -50%) scale(1)'
    }, 300);
    }
    
    function closePopup() {
    $('#popup-overlay').animate({
        opacity: 0
    }, 300, function() {
        $(this).css('display', 'none');
    });
    
    $('#popup-container').animate({
        opacity: 0,
        transform: 'translate(-50%, -50%) scale(0.95)'
    }, 300, function() {
        $(this).css('display', 'none');
    });
    }
    
};
document.head.appendChild(script);