export default `
{{#if isGroupStart}}        
<li>
  <ul class="content-box">
  {{/if}}
    
    <li>
      <a class="thumbnail-box" href="#" data-detail-hash="{{detail_hash}}">
        <div class="thumbnail">
          <img src="{{image}}" alt="{{alt}}" />
          <div class="overlay">
            {{#each delivery_type}}
              <p class="txt">{{this}}</p>
            {{/each}}
          </div>
        </div>

        <dl class="content">
          <dt class="title">{{title}}</dt>
          <dd class="desc">{{description}}</dd>
          <dd class="price-wrapper">
            {{#if n_price}}
              <span class="original-price">{{this}}</span>
            {{/if}}
            <span class="final-price">
              <span class="number">{{s_price}}</span>
              <!-- <span class="unit">원</span> -->
            </span>
          </dd>
          <dd class="badge-wrapper">
            {{#each badge}}
              <i class="bm-icon badge-event">{{this}}</i>
            {{/each}}
          </dd>                   
        </dl>
      </a>
    </li>

  {{#if isGroupEnd}}
  </ul>
</li>
{{/if}}`;


/*

<li>
  <ul class="content-box">
    <li>
      <a class="thumbnail-box" href="#">
        <div class="thumbnail">
          <img src="./src/img/img-sub-dish.jpg" alt="[집밥의완성] 1월 제철박스" />
          <div class="overlay">
            <p class="txt">새벽배송</p>
            <p class="txt">전국택배</p>
          </div>
        </div>

        <dl class="content">
          <dt class="title">[집밥의완성] 1월 제철박스 제철박스 제철박스 제철박스 제철박스 제철박스</dt>
          <dd class="desc">둘이서 한 끼 먹기 딱 좋아요. 둘이서 한 끼 먹기 딱 좋아요. 둘이서 한 끼 먹기 딱 좋아요</dd>
          <dd class="price-wrapper">
            <span class="original-price">22,900</span>
            <span class="final-price">
              <span class="number">20,500</span>
              <span class="unit">원</span>
            </span>
          </dd>
          <dd class="badge-wrapper">
            <i class="bm-icon badge-event">이벤트특가</i>
          </dd>                   
        </dl>
      </a>
    </li>

    <li>
      <a class="thumbnail-box" href="#">
        <div class="thumbnail">
          <img src="./src/img/img-sub-dish.jpg" alt="[집밥의완성] 1월 제철박스" />
          <div class="overlay">
            <p class="txt">새벽배송</p>
            <p class="txt">전국택배</p>
          </div>
        </div>

        <dl class="content">
          <dt class="title">[집밥의완성] 1월 제철박스</dt>
          <dd class="desc">둘이서 한 끼 먹기 딱 좋아요</dd>
          <dd class="price-wrapper">
            <span class="original-price">22,900</span>
            <span class="final-price">
              <span class="number">20,500</span>
              <span class="unit">원</span>
            </span>
          </dd>
          <dd class="badge-wrapper">
            <i class="bm-icon badge-event">이벤트특가</i>
          </dd>
        </dl>
      </a>
    </li>

    <li>
      <a class="thumbnail-box" href="#">
        <div class="thumbnail">
          <img src="./src/img/img-sub-dish.jpg" alt="[집밥의완성] 1월 제철박스" />
          <div class="overlay">
            <p class="txt">새벽배송</p>
            <p class="txt">전국택배</p>
          </div>
        </div>

        <dl class="content">
          <dt class="title">[집밥의완성] 1월 제철박스</dt>
          <dd class="desc">둘이서 한 끼 먹기 딱 좋아요</dd>
          <dd class="price-wrapper">
            <span class="original-price">22,900</span>
            <span class="final-price">
              <span class="number">20,500</span>
              <span class="unit">원</span>
            </span>
          </dd>
          <dd class="badge-wrapper">
            <i class="bm-icon badge-event">이벤트특가</i>
          </dd>
        </dl>
      </a>
    </li>

    <li>
      <a class="thumbnail-box" href="#">
        <div class="thumbnail">
          <img src="./src/img/img-sub-dish.jpg" alt="[집밥의완성] 1월 제철박스" />
          <div class="overlay">
            <p class="txt">새벽배송</p>
            <p class="txt">전국택배</p>
          </div>
        </div>

        <dl class="content">
          <dt class="title">[집밥의완성] 1월 제철박스</dt>
          <dd class="desc">둘이서 한 끼 먹기 딱 좋아요</dd>
          <dd class="price-wrapper">
            <span class="original-price">22,900</span>
            <span class="final-price">
              <span class="number">20,500</span>
              <span class="unit">원</span>
            </span>
          </dd>
          <dd class="badge-wrapper">
            <i class="bm-icon badge-event">이벤트특가</i>
          </dd>
        </dl>
      </a>
    </li>
  </ul>
</li>

<li>
  <ul class="content-box">
    <li>
      <a class="thumbnail-box" href="#">
        <div class="thumbnail">
          <img src="./src/img/img-sub-dish.jpg" alt="[집밥의완성] 1월 제철박스" />
          <div class="overlay">
            <p class="txt">새벽배송</p>
            <p class="txt">전국택배</p>
          </div>
        </div>

        <dl class="content">
          <dt class="title">[집밥의완성] 1월 제철박스</dt>
          <dd class="desc">둘이서 한 끼 먹기 딱 좋아요</dd>
          <dd class="price-wrapper">
            <span class="original-price">22,900</span>
            <span class="final-price">
              <span class="number">20,500</span>
              <span class="unit">원</span>
            </span>
          </dd>
          <dd class="badge-wrapper">
            <i class="bm-icon badge-event">이벤트특가</i>
          </dd>
        </dl>
      </a>
    </li>

    <li>
      <a class="thumbnail-box" href="#">
        <div class="thumbnail">
          <img src="./src/img/img-sub-dish.jpg" alt="[집밥의완성] 1월 제철박스" />
          <div class="overlay">
            <p class="txt">새벽배송</p>
            <p class="txt">전국택배</p>
          </div>
        </div>

        <dl class="content">
          <dt class="title">[집밥의완성] 1월 제철박스</dt>
          <dd class="desc">둘이서 한 끼 먹기 딱 좋아요</dd>
          <dd class="price-wrapper">
            <span class="original-price">22,900</span>
            <span class="final-price">
              <span class="number">20,500</span>
              <span class="unit">원</span>
            </span>
          </dd>
          <dd class="badge-wrapper">
            <i class="bm-icon badge-event">이벤트특가</i>
          </dd>
        </dl>
      </a>
    </li>

    <li>
      <a class="thumbnail-box" href="#">
        <div class="thumbnail">
          <img src="./src/img/img-sub-dish.jpg" alt="[집밥의완성] 1월 제철박스" />
          <div class="overlay">
            <p class="txt">새벽배송</p>
            <p class="txt">전국택배</p>
          </div>
        </div>

        <dl class="content">
          <dt class="title">[집밥의완성] 1월 제철박스</dt>
          <dd class="desc">둘이서 한 끼 먹기 딱 좋아요</dd>
          <dd class="price-wrapper">
            <span class="original-price">22,900</span>
            <span class="final-price">
              <span class="number">20,500</span>
              <span class="unit">원</span>
            </span>
          </dd>
          <dd class="badge-wrapper">
            <i class="bm-icon badge-event">이벤트특가</i>
          </dd>
        </dl>
      </a>
    </li>

    <li>
      <a class="thumbnail-box" href="#">
        <div class="thumbnail">
          <img src="./src/img/img-sub-dish.jpg" alt="[집밥의완성] 1월 제철박스" />
          <div class="overlay">
            <p class="txt">새벽배송</p>
            <p class="txt">전국택배</p>
          </div>
        </div>

        <dl class="content">
          <dt class="title">[집밥의완성] 1월 제철박스</dt>
          <dd class="desc">둘이서 한 끼 먹기 딱 좋아요</dd>
          <dd class="price-wrapper">
            <span class="original-price">22,900</span>
            <span class="final-price">
              <span class="number">20,500</span>
              <span class="unit">원</span>
            </span>
          </dd>
          <dd class="badge-wrapper">
            <i class="bm-icon badge-event">이벤트특가</i>
          </dd>
        </dl>
      </a>
    </li>
  </ul>
</li>

*/