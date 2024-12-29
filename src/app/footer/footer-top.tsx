import { dmSans } from '../font';

function FooterTop() {
  return (
    <div className={`${dmSans.className} container`}>
      <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-center">
        {/* newsletter info */}
        <div className="space-y-2 text-background">
          <h3>Join Our Newsletter</h3>
          <p className="max-w-xl leading-6 text-[#CECECE]">
            Be the first to receive latest updates on promo, sales and offers
          </p>
        </div>

        {/* newsletter form */}
        <form className="grid gap-4 font-[600] lg:grid-cols-[210px,_120px]">
          <input
            type="email"
            placeholder="Enter your email"
            className="rounded-md border bg-[#D6D6D6] px-2 py-2 text-[#737373] placeholder:text-foreground/60"
          />
          <button
            className="rounded-md bg-background px-4 py-2 text-sm"
            type="button"
          >
            Subscribe
          </button>
        </form>
      </div>
    </div>
  );
}

export default FooterTop;
