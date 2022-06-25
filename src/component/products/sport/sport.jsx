import CardComponent from "../cardComponent";

const Sport = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div>
            <div class="card-deck text-center d-flex flex-nowrap ">
              <CardComponent
                src={require("../../../media/Books/sport/bazaryabi.jpg")}
                title="بازاریابی ورزشی"
                writer=" الهام کریمی"
                explan="بازاریابی ورزشی به عنوان یک فرایند مهم و تاثیرگذار در صنعت ورزش دنیا در دهه اخیر شناخته شده و به یکی از مسائل و چالش‌های موردتوجه در پیشرفت این صنعت مبدل گشته است."
                price="19.000"
              />

              <CardComponent
                src={require("../../../media/Books/sport/yoga.jpg")}
                title="یوگای پیشرفته مغز"
                writer=" چوا کوک سویی"
                explan="مغز یک نوزاد انسان میلیاردها سلول مغزی دارد و از شبکه‌ی درهم‌تنیده‌ای از رشته‌های عصبی تشکیل شده است؛ هر شخص به‌طور متوسط می‌تواند حدود یک میلیون موضوع را در ذهنش ذخیره کند؛ مغز"
                price="19.000"
              />
              <CardComponent
                src={require("../../../media/Books/sport/footbal.jpg")}
                title="روانشناسی فوتبال"
                writer=" اندرو کیل"
                explan="دلیل اصلى براى مطالعه روانشناسی ورزشى در فوتبال، پیشرفت آگاهى فردى بازیکنان است؛ یادگیرى چگونگى بالا بردن اعتماد به نفس، کنترل و تعهد در آن‌ها و مهم‌تر از همه این که چگونه مى‌توان لذت بردن از بازى را در بین بازیکنان و طى تجربه‌ى فوتبال تضمین کرد."
                price="19.000"
              />
              <CardComponent
                src={require("../../../media/Books/sport/badanSazi.jpg")}
                title="دنیای علم بدنسازی"
                writer="شایان فلاحتی مروست "
                explan="یک مربی بدنسازی می‌بایست اطلاعات خود را در زمینه‌های مختلف ورزشی بروز کند تا بتواند ورزشکار خود را به بهترین عملکرد مورد نظر برساند. داشتن یک منبع مناسب، جامع و بروز یکی از مهمترین دارایی‌های مربیان بدنسازی و ورزشی است."
                price="19.000"
              />
              {/* <CardComponent
                src={require("../../../media/Books/1.jpg")}
                title="اصول مربیگری خصوصی"
                writer=" جاناتان گودمن"
                explan="ین کتاب تلفیقی از نکاتی ضروری است که هر مربی به آن نیاز دارد. هر مربی خصصوصی باید همیشه یک راهنمای با تجربه و مشاور ماهر همراه خود داشته باشد تا در هر زمان و مکانی بتواند از آن استفاده کند."
                price="19.000"
              /> */}
              {/* <CardComponent
                src={require("../../../media/Books/1.jpg")}
                title="مهندسی عضلات"
                writer="صادق صالحی زاده "
                explan="کتاب مهندسی عضلات نوشته‌ی صادق صالحی زاده، هر آن چیزی که نیاز است برای به دست آوردن رشد عضلانی بدانید، دربردارد و به شما کمک می‌کند تا ماهیچه‌هایتان را تقویت کنید و بدنی سالم و متناسب برای خود بسازی"
                price="19.000"
              /> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sport;