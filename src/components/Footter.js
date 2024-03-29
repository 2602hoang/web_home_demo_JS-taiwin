import { AntDesignOutlined, ArrowRightOutlined, FacebookFilled, GithubOutlined, GoogleOutlined, Html5Outlined, InstagramOutlined, JavaScriptOutlined, RadarChartOutlined, SearchOutlined, TwitterOutlined, YoutubeOutlined } from '@ant-design/icons';
import { Button, Form, Input } from 'antd';
import React from 'react';
export default function Footter() {
    return (
        <footer id="part-3" className="self-stretch bg-neutral-black flex flex-row items-start justify-between py-16 px-[165px] box-border max-w-full gap-[20px] z-[1] mq825:pl-[82px] mq825:pr-[82px] mq825:box-border mq1400:flex-wrap mq450:pl-5 mq450:pr-5 mq450:box-border">

            <div className="w-[350px] overflow-hidden shrink-0 flex flex-col items-start justify-start gap-[40px] min-w-[350px] max-w-full text-left text-sm text-neutral-silver font-body-regular-body-3 mq825:min-w-full mq1400:flex-1 mq450:gap-[20px_40px]">

                <div className="w-[191px] h-[29.7px] flex flex-row items-start justify-start gap-[9.900000000000093px]">
                    <JavaScriptOutlined
                        className="h-[28.6px] max-w-full relative min-h-[30px] shrink-0 [debug_commit:1cbd860]"
                        alt=""

                    />
                    <div
                        className=" pt-[3.5px] self-stretch h-[28.6px] relative max-w-full overflow-hidden shrink-0 [debug_commit:1cbd860]"

                    >+</div>
                    {/* <div className="h-[28.6px] w-[43.3px] flex-1 flex flex-col items-start justify-start pt-[2.099999999999909px] px-0 pb-0 box-border"> */}
                    <Html5Outlined
                        className="self-stretch h-[28.6px] relative  max-w-full overflow-hidden shrink-0 [debug_commit:1cbd860]"
                        alt=""

                    />
                    <div
                        className="self-stretch h-[28.6px] relative pt-[3.5px] max-w-full overflow-hidden shrink-0 [debug_commit:1cbd860]"

                    >+</div>
                    {/* </div> */}
                    {/* <div className="h-[29.6px] flex-1 flex flex-col items-start justify-start pt-[2.099999999999909px] px-0 pb-0 box-border"> */}
                    <AntDesignOutlined
                        className="self-stretch h-[28.6px] max-w-full relative max-w-full overflow-hidden shrink-0 [debug_commit:1cbd860]"
                        alt=""

                    />
                    {/* </div> */}

                </div>
                <div className="self-stretch overflow-hidden flex flex-col items-start justify-start gap-[8px]">
                    <div className="self-stretch relative leading-[20px]">
                    Contact:
                    </div>
                    <div className="self-stretch relative leading-[20px]">
                        Address: Phu Nhuan,HCM
                       <br/>
                        Email: vuhuyhoangboj@gmail.com
                        <br/>
                        Tel: +84 917 789 964
                        <br/>
                        I look forward to hearing from potential employers.
                        <br/>
                    Thank you!
                    </div>
                </div>
                <a>Social network here 👇</a>

                <div className=" h-8 overflow-hidden shrink-0 flex flex-row items-start justify-start gap-[16px]">
                   <ArrowRightOutlined style={{marginTop:"10px"}}/>
                    <Button type='link' href='https://www.facebook.com/VHH26022001/'>
                        <FacebookFilled
                            className="h-8 w-8 relative min-h-[32px]"
                            loading="lazy"
                            alt=""

                        />
                    </Button>
                    <Button type='link' href='https://vuhuyhoangcv.wordpress.com/'>
                        <GoogleOutlined
                            className="h-8 w-8 relative min-h-[32px]"
                            alt=""

                        />
                    </Button>
                    <Button type='link' href='https://github.com/2602hoang'>
                        <GithubOutlined
                            className="h-8 w-8 relative min-h-[32px]"
                            alt=""

                        />
                    </Button>
                    <Button type='link'>
                        <TwitterOutlined
                            className="h-8 w-8 relative min-h-[32px]"
                            alt=""

                        />
                    </Button>
                </div>
            </div>
            <div className="w-[635px] overflow-hidden shrink-0 flex flex-row items-start justify-start gap-[30px] min-w-[635px] max-w-full text-left text-xl text-neutral-white font-body-regular-body-3 lg:min-w-full mq825:flex-wrap mq1400:flex-1">
                <div className="w-40 overflow-hidden shrink-0 flex flex-col items-start justify-start gap-[24px]">
                    <div className="self-stretch relative leading-[28px] font-semibold mq450:text-base mq450:leading-[22px]">
                        Company
                    </div>
                    <div className="self-stretch overflow-hidden flex flex-col items-start justify-start gap-[12px] text-sm text-neutral-silver">
                        <Button type='link' className="text-neutral-silver self-stretch relative leading-[20px]">About us</Button>
                        <Button type='link' className="text-neutral-silver self-stretch relative leading-[20px]">Blog</Button>
                        <Button type='link' className="text-neutral-silver self-stretch relative leading-[20px]">Contact us</Button>
                        <Button type='link' className="self-stretch relative text-neutral-silver leading-[20px]">Pricing</Button>
                        <Button type='link' className="self-stretch text-neutral-silver relative leading-[20px]">
                            Testimonials
                        </Button>
                    </div>
                </div>
                <div className="w-40 overflow-hidden shrink-0 flex flex-col items-start justify-start gap-[24px]">
                    <div className="self-stretch relative leading-[28px] font-semibold mq450:text-base mq450:leading-[22px]">
                        Support
                    </div>
                    <div className="self-stretch overflow-hidden flex flex-col items-start justify-start gap-[12px] text-sm text-neutral-silver">
                        <Button type='link' className="text-neutral-silver self-stretch relative leading-[20px]">
                            Help center
                        </Button>
                        <Button type='link' className="text-neutral-silver self-stretch relative leading-[20px]">
                            Terms of service
                        </Button>
                        <Button type='link' className="text-neutral-silver self-stretch relative leading-[20px]">Legal</Button>
                        <Button type='link' className="text-neutral-silver self-stretch relative leading-[20px]">
                            Privacy policy
                        </Button>
                        <Button type='link' className="text-neutral-silver   self-stretch relative leading-[20px]">Status</Button>
                    </div>
                </div>
                <div className="flex-1 overflow-hidden flex flex-col items-start justify-start gap-[24px] min-w-[166px]">
                    <div className="w-40 relative leading-[28px] font-semibold inline-block mq450:text-base mq450:leading-[22px]">
                        Stay up to date
                    </div>
                    <div className="self-stretch flex flex-row items-start justify-between pt-[9px] px-3 pb-[11px] relative gap-[20px] text-sm text-text-gray-300">
                        <Input
                            placeholder='Your email address'
                            variant='outlined'

                            className="h-full w-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] rounded-lg bg-gray" />
                        <div className="relative leading-[20px] inline-block min-w-[126px] z-[1]">

                        </div>
                        <div className="h-5 flex flex-col items-start justify-start pt-0.5 px-0 pb-0 box-border">
                            <SearchOutlined className="w-[18px] h-[18px] relative overflow-hidden shrink-0 z-[1]" />


                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}