// داده‌های کامل مستندات aiovir
window.methodsData = {
  categories: [
    { id: 'intro', label: 'معرفی پروژه', icon: 'https://www.emojiall.com/images/60/telegram/1f680.gif' },
    { id: 'core', label: 'هسته کلاینت', icon: 'https://www.emojiall.com/images/60/samsung/2699-fe0f.png' },
    { id: 'account', label: 'حساب و پروفایل', icon: 'https://www.emojiall.com/images/240/telegram/1f464.gif' },
    { id: 'posts', label: 'ویراست‌ها و پست‌ها', icon: 'https://www.emojiall.com/images/60/facebook/1f4c4.png' },
    { id: 'features', label: 'ویراست‌شنو و فیچرها', icon: 'https://www.emojiall.com/images/60/telegram/1f399-fe0f.gif' },
    { id: 'messages', label: 'پیام خصوصی', icon: 'https://www.emojiall.com/images/60/telegram/2709-fe0f.gif' },
    { id: 'interactions', label: 'تعاملات و کاربران', icon: 'https://www.emojiall.com/images/240/telegram/1f91d.gif' },
    { id: 'search', label: 'جستجو و هشتگ‌ها', icon: 'https://www.emojiall.com/images/240/telegram/1f50d.gif' },
    { id: 'accounting', label: 'امور مالی', icon: 'https://www.emojiall.com/images/240/telegram/1f4b0.gif' }
  ],

  howItWorksSteps: [
    {
      id: 1,
      icon: 'https://www.emojiall.com/images/60/apple/1f4e1.png',
      title: '۱. اتصال و احراز هویت',
      desc: 'کتابخونه با استفاده از VirastyClient یک نشست امن ایجاد می‌کنه. با متد login() شماره و رمز رو می‌فرستی و توکن دسترسی دریافت می‌کنی.'
    },
    {
      id: 2,
      icon: 'https://www.emojiall.com/images/60/facebook/1f4c4.png',
      title: '۲. ذخیره‌سازی نشست',
      desc: 'بعد از ورود موفق، توکن و اطلاعات نشست توی فایل .vir ذخیره می‌شه. دفعه بعد که برنامه رو اجرا کنی، دیگه نیازی به لاگین مجدد نیست.'
    },
    {
      id: 3,
      icon: 'https://www.emojiall.com/images/60/apple/1f4e6.png',
      title: '۳. فراخوانی متدها',
      desc: 'همه عملیات از طریق متدهای ساده و خوانا در دسترس هستن. از get_me() برای گرفتن اطلاعات کاربر، create_post() برای پست زدن، send_message() برای ارسال پیام و ...'
    },
    {
      id: 4,
      icon: 'https://www.emojiall.com/images/60/apple/1f504.png',
      title: '۴. مدیریت خودکار خطاها',
      desc: 'اگر خطایی رخ بده یا محدودیت نرخ درخواست (Rate Limit) فعال بشه، کتابخونه به‌صورت خودکار چند بار تلاش مجدد می‌کنه و با خطاهای رایج به‌خوبی کنار می‌آید.'
    }
  ],

  methods: [
    // ==================== CORE ====================
    {
      id: 'client-init',
      category: 'core',
      type: 'Async',
      name: 'VirastyClient(token, session_file, proxy)',
      desc: 'کلاینت اصلی آسنکرون با مدیریت نشست، پروکسی و فایل کوکی.',
      code: 'from aiovir import VirastyClient\n\nasync with VirastyClient(session_file="bot.vir", proxy="socks5://127.0.0.1:1080") as client:\n    await client.login("09123456789", "pass")\n    me = await client.get_me()'
    },
    {
      id: 'login',
      category: 'core',
      type: 'Request',
      name: 'login(username, password)',
      desc: 'ورود با شماره همراه و رمز عبور، ذخیره خودکار نشست.',
      code: 'await client.login(username="09123456789", password="secure_pass")'
    },
    {
      id: 'logout',
      category: 'core',
      type: 'Request',
      name: 'logout()',
      desc: 'پاکسازی نشست جاری و حذف توکن از حافظه.',
      code: 'await client.logout()'
    },
    {
      id: 'get-version',
      category: 'core',
      type: 'Request',
      name: 'get_version()',
      desc: 'بررسی نسخه جاری API و کلاینت.',
      code: 'ver = await client.get_version()'
    },
    {
      id: 'get-server-time',
      category: 'core',
      type: 'Request',
      name: 'get_server_time()',
      desc: 'زمان سرور به‌صورت تایم‌استمپ.',
      code: 'ts = await client.get_server_time()'
    },
    {
      id: 'logout-user',
      category: 'core',
      type: 'Request',
      name: 'logout_user()',
      desc: 'خروج از حساب کاربری.',
      code: 'await client.logout_user()'
    },
    {
      id: 'get-general-stats',
      category: 'core',
      type: 'Request',
      name: 'get_general_stats()',
      desc: 'آمار کلی سیستم.',
      code: 'stats = await client.get_general_stats()'
    },
    {
      id: 'get-visible-roles',
      category: 'core',
      type: 'Request',
      name: 'get_visible_roles(section)',
      desc: 'لیست رول‌های قابل مشاهده.',
      code: 'roles = await client.get_visible_roles("main")'
    },
    {
      id: 'get-support-token',
      category: 'core',
      type: 'Request',
      name: 'get_support_token()',
      desc: 'توکن اتصال به پشتیبانی.',
      code: 'token = await client.get_support_token()'
    },

    // ==================== ACCOUNT ====================
    {
      id: 'get-me',
      category: 'account',
      type: 'Request',
      name: 'get_me()',
      desc: 'دریافت اطلاعات کامل کاربر لاگین‌شده.',
      code: 'me = await client.get_me()\nprint(f"@{me.username}")'
    },
    {
      id: 'get-notification-badge',
      category: 'account',
      type: 'Request',
      name: 'get_notification_badge()',
      desc: 'دریافت تعداد اعلانات خوانده‌نشده.',
      code: 'badge = await client.get_notification_badge()'
    },
    {
      id: 'get-notifications',
      category: 'account',
      type: 'Request',
      name: 'get_notifications(page_size, action, seen)',
      desc: 'لیست اعلانات با صفحه‌بندی و فیلتر دیده/ندیده.',
      code: 'notifs = await client.get_notifications(page_size=20, seen=False)'
    },
    {
      id: 'mark-all-notifications-read',
      category: 'account',
      type: 'Request',
      name: 'mark_all_notifications_read()',
      desc: 'علامت‌گذاری همه اعلانات به عنوان خوانده‌شده.',
      code: 'await client.mark_all_notifications_read()'
    },
    {
      id: 'clear-all-notifications',
      category: 'account',
      type: 'Request',
      name: 'clear_all_notifications()',
      desc: 'پاک‌سازی کامل تاریخچه اعلانات.',
      code: 'await client.clear_all_notifications()'
    },
    {
      id: 'update-avatar',
      category: 'account',
      type: 'Request',
      name: 'update_avatar(sid)',
      desc: 'تغییر تصویر پروفایل با SID.',
      code: 'await client.update_avatar("sid_avatar")'
    },
    {
      id: 'remove-avatar',
      category: 'account',
      type: 'Request',
      name: 'remove_avatar()',
      desc: 'حذف تصویر پروفایل.',
      code: 'await client.remove_avatar()'
    },
    {
      id: 'update-temporary-avatar',
      category: 'account',
      type: 'Request',
      name: 'update_temporary_avatar(avatar_sid)',
      desc: 'تنظیم آواتار موقت.',
      code: 'await client.update_temporary_avatar("sid_temp")'
    },
    {
      id: 'remove-temporary-avatar',
      category: 'account',
      type: 'Request',
      name: 'remove_temporary_avatar()',
      desc: 'حذف آواتار موقت.',
      code: 'await client.remove_temporary_avatar()'
    },
    {
      id: 'update-profile',
      category: 'account',
      type: 'Request',
      name: 'update_profile(bio, location, website)',
      desc: 'به‌روزرسانی بیو، موقعیت و وب‌سایت.',
      code: 'await client.update_profile(bio="توسعه‌دهنده", website="https://site.com")'
    },
    {
      id: 'update-personal-profile',
      category: 'account',
      type: 'Request',
      name: 'update_personal_profile(firstname, lastname)',
      desc: 'ویرایش اطلاعات شخصی (نام، نام‌خانوادگی).',
      code: 'await client.update_personal_profile(firstname="علی", lastname="رضایی")'
    },
    {
      id: 'update-legal-profile',
      category: 'account',
      type: 'Request',
      name: 'update_legal_profile(company_name, brand_name)',
      desc: 'ویرایش اطلاعات حقوقی.',
      code: 'await client.update_legal_profile(company_name="شرکت ویرا")'
    },
    {
      id: 'update-username',
      category: 'account',
      type: 'Request',
      name: 'update_username(new_username)',
      desc: 'تغییر نام کاربری.',
      code: 'await client.update_username("new_username")'
    },
    {
      id: 'check-username-availability',
      category: 'account',
      type: 'Request',
      name: 'check_username_availability(username)',
      desc: 'بررسی آزاد بودن نام کاربری.',
      code: 'avail = await client.check_username_availability("mybot")'
    },
    {
      id: 'change-password',
      category: 'account',
      type: 'Request',
      name: 'change_password(old_password, new_password)',
      desc: 'تغییر رمز عبور.',
      code: 'await client.change_password("old", "new")'
    },
    {
      id: 'reset-password',
      category: 'account',
      type: 'Request',
      name: 'reset_password(verified_token, new_password)',
      desc: 'بازنشانی رمز با توکن.',
      code: 'await client.reset_password("token", "newpass")'
    },
    {
      id: 'deactivate-account',
      category: 'account',
      type: 'Request',
      name: 'deactivate_account()',
      desc: 'غیرفعال‌سازی موقت حساب.',
      code: 'await client.deactivate_account()'
    },
    {
      id: 'get-sessions',
      category: 'account',
      type: 'Request',
      name: 'get_sessions()',
      desc: 'لیست نشست‌های فعال.',
      code: 'sessions = await client.get_sessions()'
    },
    {
      id: 'remove-session',
      category: 'account',
      type: 'Request',
      name: 'remove_session(device_id, other)',
      desc: 'خاتمه نشست دستگاه.',
      code: 'await client.remove_session("dev_123")'
    },
    {
      id: 'get-referral-info',
      category: 'account',
      type: 'Request',
      name: 'get_referral_info(referral_code)',
      desc: 'اطلاعات کد معرف.',
      code: 'info = await client.get_referral_info("ref_123")'
    },
    {
      id: 'join-referral',
      category: 'account',
      type: 'Request',
      name: 'join_referral(referral_code)',
      desc: 'ثبت کد معرف.',
      code: 'await client.join_referral("ref_123")'
    },
    {
      id: 'get-user-daily-stats',
      category: 'account',
      type: 'Request',
      name: 'get_user_daily_stats(user_id)',
      desc: 'آمار روزانه کاربر.',
      code: 'daily = await client.get_user_daily_stats("user_456")'
    },

    // ==================== POSTS ====================
    {
      id: 'get-trends',
      category: 'posts',
      type: 'Request',
      name: 'get_trends()',
      desc: 'دریافت هشتگ‌ها و موضوعات داغ لحظه‌ای.',
      code: 'trends = await client.get_trends()'
    },
    {
      id: 'get-post',
      category: 'posts',
      type: 'Request',
      name: 'get_post(post_id)',
      desc: 'دریافت جزئیات کامل یک پست با شناسه.',
      code: 'post = await client.get_post("post_123")'
    },
    {
      id: 'upload-media',
      category: 'posts',
      type: 'Request',
      name: 'upload_media(file_path, file_type)',
      desc: 'آپلود فایل و دریافت SID جهت استفاده در پست.',
      code: 'sid = await client.upload_media("image.png", "image/png")'
    },
    {
      id: 'create-post',
      category: 'posts',
      type: 'Request',
      name: 'create_post(text, media, reply_post_id)',
      desc: 'ایجاد پست جدید با متن، مدیا و ریپلای دلخواه.',
      code: 'await client.create_post(text="سلام دنیا!", media=[sid])'
    },
    {
      id: 'edit-post',
      category: 'posts',
      type: 'Request',
      name: 'edit_post(post_id, text, title)',
      desc: 'ویرایش محتوا و عنوان پست.',
      code: 'await client.edit_post("post_123", text="متن جدید")'
    },
    {
      id: 'delete-post',
      category: 'posts',
      type: 'Request',
      name: 'delete_post(post_id)',
      desc: 'حذف دائمی پست.',
      code: 'await client.delete_post("post_123")'
    },
    {
      id: 'toggle-reaction',
      category: 'posts',
      type: 'Request',
      name: 'toggle_reaction(post_id, reaction)',
      desc: 'ثبت یا لغو واکنش (لایک، دیس‌لایک و ...).',
      code: 'await client.toggle_reaction("post_123", "like")'
    },
    {
      id: 'repost',
      category: 'posts',
      type: 'Request',
      name: 'repost(post_id)',
      desc: 'بازنشر پست در تایم‌لاین شخصی.',
      code: 'await client.repost("post_123")'
    },
    {
      id: 'undo-repost',
      category: 'posts',
      type: 'Request',
      name: 'undo_repost(post_id)',
      desc: 'لغو بازنشر پست.',
      code: 'await client.undo_repost("post_123")'
    },
    {
      id: 'bookmark',
      category: 'posts',
      type: 'Request',
      name: 'bookmark(post_id, add)',
      desc: 'افزودن یا حذف از نشانه‌ها.',
      code: 'await client.bookmark("post_123", add=True)'
    },
    {
      id: 'get-replies',
      category: 'posts',
      type: 'Request',
      name: 'get_replies(post_id, action, order)',
      desc: 'لیست پاسخ‌ها و کامنت‌های یک پست.',
      code: 'replies = await client.get_replies("post_123")'
    },
    {
      id: 'get-reposts',
      category: 'posts',
      type: 'Request',
      name: 'get_reposts(post_id, page)',
      desc: 'لیست کاربرانی که پست را بازنشر کرده‌اند.',
      code: 'reposters = await client.get_reposts("post_123", page=1)'
    },
    {
      id: 'get-repost-quotes',
      category: 'posts',
      type: 'Request',
      name: 'get_repost_quotes(post_id, page)',
      desc: 'لیست بازنشرهای همراه با متن (کوت).',
      code: 'quotes = await client.get_repost_quotes("post_123")'
    },
    {
      id: 'get-reactioners',
      category: 'posts',
      type: 'Request',
      name: 'get_reactioners(post_id, page)',
      desc: 'کاربرانی که به پست واکنش نشان داده‌اند.',
      code: 'reactors = await client.get_reactioners("post_123")'
    },
    {
      id: 'pin-post',
      category: 'posts',
      type: 'Request',
      name: 'pin_post(post_id, pin)',
      desc: 'سنجاق یا برداشتن سنجاق پست در پروفایل.',
      code: 'await client.pin_post("post_123", pin=True)'
    },
    {
      id: 'report-post',
      category: 'posts',
      type: 'Request',
      name: 'report_post(post_id, abuse_category_id, description)',
      desc: 'گزارش تخلف پست.',
      code: 'await client.report_post("post_123", "spam", "تبلیغاتی")'
    },
    {
      id: 'get-user-posts',
      category: 'posts',
      type: 'Request',
      name: 'get_user_posts(user_id, type)',
      desc: 'دریافت پست‌های یک کاربر (نوشته‌ها، بازنشرها، لایک‌ها).',
      code: 'posts = await client.get_user_posts("user_456", type="posts")'
    },
    {
      id: 'get-feed',
      category: 'posts',
      type: 'Request',
      name: 'get_feed(action, type, topic_id)',
      desc: 'فید اصلی بر اساس نوع (تصویر، ویدئو، همه).',
      code: 'feed = await client.get_feed(type="images")'
    },
    {
      id: 'get-feed-for-you',
      category: 'posts',
      type: 'Request',
      name: 'get_feed_for_you(pagination)',
      desc: 'فید پیشنهادی الگوریتم.',
      code: 'foryou = await client.get_feed_for_you()'
    },
    {
      id: 'get-post-stats',
      category: 'posts',
      type: 'Request',
      name: 'get_post_stats(post_id)',
      desc: 'آمار ایمپرشن و تعاملات پست.',
      code: 'stats = await client.get_post_stats("post_123")'
    },
    {
      id: 'get-bookmarks',
      category: 'posts',
      type: 'Request',
      name: 'get_bookmarks(action)',
      desc: 'لیست پست‌های نشانه‌شده.',
      code: 'bookmarks = await client.get_bookmarks()'
    },
    {
      id: 'clear-bookmarks',
      category: 'posts',
      type: 'Request',
      name: 'clear_bookmarks()',
      desc: 'پاک‌سازی همه نشانه‌ها.',
      code: 'await client.clear_bookmarks()'
    },
    {
      id: 'get-feed-update',
      category: 'posts',
      type: 'Request',
      name: 'get_feed_update(type, topic_id)',
      desc: 'بررسی پست‌های جدید در فید.',
      code: 'updates = await client.get_feed_update()'
    },
    {
      id: 'update-post-rating',
      category: 'posts',
      type: 'Request',
      name: 'update_post_rating(post_id, score)',
      desc: 'امتیازدهی به پست (۱ تا ۵).',
      code: 'await client.update_post_rating("post_123", score=4)'
    },
    {
      id: 'mute-post-mentions',
      category: 'posts',
      type: 'Request',
      name: 'mute_post_mentions(post_id, mute)',
      desc: 'خاموش کردن منشن‌های آن پست.',
      code: 'await client.mute_post_mentions("post_123", mute=True)'
    },
    {
      id: 'get-edit-history',
      category: 'posts',
      type: 'Request',
      name: 'get_edit_history(post_id)',
      desc: 'تاریخچه ویرایش‌های پست.',
      code: 'history = await client.get_edit_history("post_123")'
    },
    {
      id: 'set-post-title',
      category: 'posts',
      type: 'Request',
      name: 'set_post_title(post_id, title)',
      desc: 'افزودن عنوان به پست.',
      code: 'await client.set_post_title("post_123", "عنوان اختصاصی")'
    },
    {
      id: 'remove-post-title',
      category: 'posts',
      type: 'Request',
      name: 'remove_post_title(post_id)',
      desc: 'حذف عنوان پست.',
      code: 'await client.remove_post_title("post_123")'
    },
    {
      id: 'add-media-to-post',
      category: 'posts',
      type: 'Request',
      name: 'add_media_to_post(post_id, media_sid, caption)',
      desc: 'افزودن رسانه به پست موجود.',
      code: 'await client.add_media_to_post("post_123", "sid_media", "کپشن")'
    },
    {
      id: 'remove-media-from-post',
      category: 'posts',
      type: 'Request',
      name: 'remove_media_from_post(post_id, media_sid)',
      desc: 'حذف رسانه از پست.',
      code: 'await client.remove_media_from_post("post_123", "sid_media")'
    },
    {
      id: 'update-media-caption',
      category: 'posts',
      type: 'Request',
      name: 'update_media_caption(post_media_id, caption)',
      desc: 'ویرایش کپشن رسانه.',
      code: 'await client.update_media_caption("media_id", "کپشن جدید")'
    },
    {
      id: 'fact-check-post',
      category: 'posts',
      type: 'Request',
      name: 'fact_check_post(post_id, fact_type)',
      desc: 'افزودن برچسب راستی‌آزمایی به پست.',
      code: 'await client.fact_check_post("post_123", "verified")'
    },
    {
      id: 'get-public-feed',
      category: 'posts',
      type: 'Request',
      name: 'get_public_feed()',
      desc: 'فید عمومی تمام پست‌های پلتفرم.',
      code: 'public = await client.get_public_feed()'
    },

    // ==================== FEATURES ====================
    {
      id: 'create-poll',
      category: 'features',
      type: 'Request',
      name: 'create_poll(question, options, expire_time, who_can_see)',
      desc: 'ساخت نظرسنجی با گزینه‌ها و زمان انقضا.',
      code: 'await client.create_poll("سوال؟", ["بله", "خیر"], 3600)'
    },
    {
      id: 'vote-poll',
      category: 'features',
      type: 'Request',
      name: 'vote_poll(poll_id, option_id)',
      desc: 'ثبت رای در نظرسنجی.',
      code: 'await client.vote_poll("poll_123", "option_1")'
    },
    {
      id: 'retract-vote',
      category: 'features',
      type: 'Request',
      name: 'retract_vote(poll_id)',
      desc: 'لغو رای قبلی.',
      code: 'await client.retract_vote("poll_123")'
    },
    {
      id: 'get-poll-participants',
      category: 'features',
      type: 'Request',
      name: 'get_poll_participants(poll_id, action, page_id)',
      desc: 'لیست شرکت‌کنندگان نظرسنجی.',
      code: 'voters = await client.get_poll_participants("poll_123")'
    },
    {
      id: 'create-campaign',
      category: 'features',
      type: 'Request',
      name: 'create_campaign(title, description, type, ...)',
      desc: 'ایجاد کمپین با هشتگ و مسئولین.',
      code: 'await client.create_campaign("کمپین", "توضیح", "نوع")'
    },
    {
      id: 'support-campaign',
      category: 'features',
      type: 'Request',
      name: 'support_campaign(campaign_id)',
      desc: 'حمایت از یک کمپین.',
      code: 'await client.support_campaign("camp_123")'
    },
    {
      id: 'update-campaign-status',
      category: 'features',
      type: 'Request',
      name: 'update_campaign_status(campaign_id, status, ...)',
      desc: 'تغییر وضعیت کمپین.',
      code: 'await client.update_campaign_status("camp_123", "active")'
    },
    {
      id: 'update-campaign',
      category: 'features',
      type: 'Request',
      name: 'update_campaign(campaign_id, title, ...)',
      desc: 'ویرایش اطلاعات کمپین.',
      code: 'await client.update_campaign("camp_123", title="عنوان جدید")'
    },
    {
      id: 'get-campaign-followups',
      category: 'features',
      type: 'Request',
      name: 'get_campaign_followups(user_id, action)',
      desc: 'لیست پیگیری‌های کمپین.',
      code: 'followups = await client.get_campaign_followups()'
    },
    {
      id: 'add-campaign-followup',
      category: 'features',
      type: 'Request',
      name: 'add_campaign_followup(campaign_id, user_id)',
      desc: 'افزودن پیگیری‌کننده به کمپین.',
      code: 'await client.add_campaign_followup("camp_123", "user_456")'
    },
    {
      id: 'remove-campaign-followup',
      category: 'features',
      type: 'Request',
      name: 'remove_campaign_followup(campaign_id, user_id)',
      desc: 'حذف پیگیری‌کننده از کمپین.',
      code: 'await client.remove_campaign_followup("camp_123", "user_456")'
    },
    {
      id: 'add-followup-result',
      category: 'features',
      type: 'Request',
      name: 'add_followup_result(campaign_id, post_id)',
      desc: 'اتصال نتیجه پیگیری به کمپین.',
      code: 'await client.add_followup_result("camp_123", "post_456")'
    },
    {
      id: 'remove-followup-result',
      category: 'features',
      type: 'Request',
      name: 'remove_followup_result(campaign_id, post_id)',
      desc: 'قطع اتصال نتیجه پیگیری.',
      code: 'await client.remove_followup_result("camp_123", "post_456")'
    },
    {
      id: 'get-campaign-stats',
      category: 'features',
      type: 'Request',
      name: 'get_campaign_stats()',
      desc: 'آمار کلی کمپین‌ها.',
      code: 'stats = await client.get_campaign_stats()'
    },
    {
      id: 'get-campaign-responsible-persons',
      category: 'features',
      type: 'Request',
      name: 'get_campaign_responsible_persons(campaign_id)',
      desc: 'لیست مسئولین کمپین.',
      code: 'persons = await client.get_campaign_responsible_persons("camp_123")'
    },
    {
      id: 'create-cloud-meeting',
      category: 'features',
      type: 'Request',
      name: 'create_cloud_meeting(room_name, is_incognito_allowed)',
      desc: 'ایجاد اتاق صوتی جدید.',
      code: 'await client.create_cloud_meeting("اتاق دیسکاشن")'
    },
    {
      id: 'start-cloud-meeting',
      category: 'features',
      type: 'Request',
      name: 'start_cloud_meeting(meeting_id)',
      desc: 'شروع اتاق صوتی.',
      code: 'await client.start_cloud_meeting("room_123")'
    },
    {
      id: 'join-cloud-meeting',
      category: 'features',
      type: 'WS',
      name: 'join_cloud_meeting(meeting_id, offer, incognito, join_mode)',
      desc: 'ورود به اتاق صوتی با WebRTC.',
      code: 'await client.join_cloud_meeting("room_123", "offer_sdp")'
    },
    {
      id: 'leave-cloud-meeting',
      category: 'features',
      type: 'WS',
      name: 'leave_cloud_meeting(meeting_id)',
      desc: 'خروج از اتاق صوتی.',
      code: 'await client.leave_cloud_meeting("room_123")'
    },
    {
      id: 'get-cloud-meeting',
      category: 'features',
      type: 'Request',
      name: 'get_cloud_meeting(meeting_id, is_summary)',
      desc: 'دریافت اطلاعات اتاق صوتی.',
      code: 'room = await client.get_cloud_meeting("room_123")'
    },
    {
      id: 'get-meeting-participants',
      category: 'features',
      type: 'Request',
      name: 'get_meeting_participants(meeting_id, action, ...)',
      desc: 'لیست حاضران در اتاق صوتی.',
      code: 'users = await client.get_meeting_participants("room_123")'
    },
    {
      id: 'request-speak',
      category: 'features',
      type: 'WS',
      name: 'request_speak(meeting_id, raise_hand)',
      desc: 'درخواست صحبت کردن (بالا بردن دست).',
      code: 'await client.request_speak("room_123", raise_hand=True)'
    },
    {
      id: 'accept-speak-request',
      category: 'features',
      type: 'Request',
      name: 'accept_speak_request(meeting_id, user_id)',
      desc: 'تایید درخواست صحبت کاربر.',
      code: 'await client.accept_speak_request("room_123", "user_456")'
    },
    {
      id: 'reject-speak-request',
      category: 'features',
      type: 'Request',
      name: 'reject_speak_request(meeting_id, user_id)',
      desc: 'رد درخواست صحبت.',
      code: 'await client.reject_speak_request("room_123", "user_456")'
    },
    {
      id: 'remove-from-speakers',
      category: 'features',
      type: 'Request',
      name: 'remove_from_speakers(meeting_id, user_id)',
      desc: 'خارج کردن از لیست سخنرانان.',
      code: 'await client.remove_from_speakers("room_123", "user_456")'
    },
    {
      id: 'kick-from-meeting',
      category: 'features',
      type: 'Request',
      name: 'kick_from_meeting(meeting_id, user_id)',
      desc: 'اخراج کاربر از اتاق.',
      code: 'await client.kick_from_meeting("room_123", "user_456")'
    },
    {
      id: 'mute-speaker-by-moderator',
      category: 'features',
      type: 'Request',
      name: 'mute_speaker_by_moderator(meeting_id, user_id, mute)',
      desc: 'میوت سخنران توسط مدیر.',
      code: 'await client.mute_speaker_by_moderator("room_123", "user_456", mute=True)'
    },
    {
      id: 'send-meeting-reaction',
      category: 'features',
      type: 'WS',
      name: 'send_meeting_reaction(meeting_id, reaction)',
      desc: 'ارسال واکنش در اتاق صوتی.',
      code: 'await client.send_meeting_reaction("room_123", "🔥")'
    },
    {
      id: 'add-meeting-admin',
      category: 'features',
      type: 'Request',
      name: 'add_meeting_admin(meeting_id, user_id)',
      desc: 'افزودن مدیر به اتاق.',
      code: 'await client.add_meeting_admin("room_123", "user_456")'
    },
    {
      id: 'remove-meeting-admin',
      category: 'features',
      type: 'Request',
      name: 'remove_meeting_admin(meeting_id, user_id)',
      desc: 'حذف مدیر از اتاق.',
      code: 'await client.remove_meeting_admin("room_123", "user_456")'
    },
    {
      id: 'get-speak-history',
      category: 'features',
      type: 'Request',
      name: 'get_speak_history(meeting_id, last_history_id)',
      desc: 'تاریخچه سخنرانان اتاق.',
      code: 'history = await client.get_speak_history("room_123")'
    },
    {
      id: 'update-cloud-meeting',
      category: 'features',
      type: 'Request',
      name: 'update_cloud_meeting(meeting_id, room_name)',
      desc: 'ویرایش نام اتاق صوتی.',
      code: 'await client.update_cloud_meeting("room_123", "نام جدید")'
    },
    {
      id: 'get-ice-config',
      category: 'features',
      type: 'Request',
      name: 'get_ice_config()',
      desc: 'دریافت کانفیگ STUN/TURN.',
      code: 'ice = await client.get_ice_config()'
    },
    {
      id: 'send-ice-candidates',
      category: 'features',
      type: 'WS',
      name: 'send_ice_candidates(meeting_id, candidates)',
      desc: 'ارسال کاندیداهای ICE.',
      code: 'await client.send_ice_candidates("room_123", ["cand1", "cand2"])'
    },
    {
      id: 'keep-meeting-alive',
      category: 'features',
      type: 'WS',
      name: 'keep_meeting_alive(meeting_id)',
      desc: 'نگهداشتن نشست اتاق صوتی.',
      code: 'await client.keep_meeting_alive("room_123")'
    },
    {
      id: 'mute-mic',
      category: 'features',
      type: 'WS',
      name: 'mute_mic(meeting_id, mute)',
      desc: 'قطع/وصل میکروفون.',
      code: 'await client.mute_mic("room_123", mute=True)'
    },

    // ==================== MESSAGES ====================
    {
      id: 'set-conversation-policy',
      category: 'messages',
      type: 'Request',
      name: 'set_conversation_policy(policy_type)',
      desc: 'تنظیم سیاست پیام‌های خصوصی.',
      code: 'await client.set_conversation_policy("followers_only")'
    },
    {
      id: 'get-conversations',
      category: 'messages',
      type: 'Request',
      name: 'get_conversations(action, type)',
      desc: 'لیست مکالمات.',
      code: 'chats = await client.get_conversations()'
    },
    {
      id: 'get-messages',
      category: 'messages',
      type: 'Request',
      name: 'get_messages(user_id, action)',
      desc: 'دریافت پیام‌های یک مکالمه.',
      code: 'msgs = await client.get_messages("user_456")'
    },
    {
      id: 'send-message',
      category: 'messages',
      type: 'Request',
      name: 'send_message(user_id, text)',
      desc: 'ارسال پیام خصوصی.',
      code: 'await client.send_message("user_456", "سلام!")'
    },
    {
      id: 'delete-message',
      category: 'messages',
      type: 'Request',
      name: 'delete_message(user_id, message_id)',
      desc: 'حذف پیام.',
      code: 'await client.delete_message("user_456", "msg_123")'
    },
    {
      id: 'delete-conversation',
      category: 'messages',
      type: 'Request',
      name: 'delete_conversation(user_id)',
      desc: 'حذف کل مکالمه.',
      code: 'await client.delete_conversation("user_456")'
    },
    {
      id: 'get-conversation-badge',
      category: 'messages',
      type: 'Request',
      name: 'get_conversation_badge()',
      desc: 'تعداد پیام‌های خوانده‌نشده.',
      code: 'badge = await client.get_conversation_badge()'
    },
    {
      id: 'update-conversation-status',
      category: 'messages',
      type: 'Request',
      name: 'update_conversation_status(user_id, status)',
      desc: 'تغییر وضعیت مکالمه (تایید، اسپم، رد).',
      code: 'await client.update_conversation_status("user_456", "approve")'
    },

    // ==================== INTERACTIONS ====================
    {
      id: 'get-user',
      category: 'interactions',
      type: 'Request',
      name: 'get_user(username)',
      desc: 'دریافت اطلاعات کاربر با نام کاربری.',
      code: 'user = await client.get_user("username")'
    },
    {
      id: 'follow-user',
      category: 'interactions',
      type: 'Request',
      name: 'follow_user(user_id)',
      desc: 'دنبال کردن کاربر.',
      code: 'await client.follow_user("user_456")'
    },
    {
      id: 'unfollow-user',
      category: 'interactions',
      type: 'Request',
      name: 'unfollow_user(user_id)',
      desc: 'لغو دنبال کردن.',
      code: 'await client.unfollow_user("user_456")'
    },
    {
      id: 'block-user',
      category: 'interactions',
      type: 'Request',
      name: 'block_user(user_id, block)',
      desc: 'بلاک یا آنبلاک کاربر.',
      code: 'await client.block_user("user_456", block=True)'
    },
    {
      id: 'mute-user',
      category: 'interactions',
      type: 'Request',
      name: 'mute_user(user_id, mute)',
      desc: 'میوت یا آنمیوت کاربر.',
      code: 'await client.mute_user("user_456", mute=True)'
    },
    {
      id: 'get-followers',
      category: 'interactions',
      type: 'Request',
      name: 'get_followers(user_id, page)',
      desc: 'لیست دنبال‌کنندگان.',
      code: 'followers = await client.get_followers("user_456")'
    },
    {
      id: 'get-followings',
      category: 'interactions',
      type: 'Request',
      name: 'get_followings(user_id, page)',
      desc: 'لیست دنبال‌شوندگان.',
      code: 'followings = await client.get_followings("user_456")'
    },
    {
      id: 'get-mutual-followers',
      category: 'interactions',
      type: 'Request',
      name: 'get_mutual_followers(user_id, page)',
      desc: 'دنبال‌کنندگان متقابل.',
      code: 'mutuals = await client.get_mutual_followers("user_456")'
    },
    {
      id: 'get-blocked-users',
      category: 'interactions',
      type: 'Request',
      name: 'get_blocked_users(page)',
      desc: 'لیست کاربران بلاک‌شده.',
      code: 'blocked = await client.get_blocked_users()'
    },
    {
      id: 'get-muted-users',
      category: 'interactions',
      type: 'Request',
      name: 'get_muted_users(page)',
      desc: 'لیست کاربران میوت‌شده.',
      code: 'muted = await client.get_muted_users()'
    },
    {
      id: 'search-users',
      category: 'interactions',
      type: 'Request',
      name: 'search_users(query)',
      desc: 'جستجوی کاربران با کلمه کلیدی.',
      code: 'results = await client.search_users("علی")'
    },
    {
      id: 'get-suggestions',
      category: 'interactions',
      type: 'Request',
      name: 'get_suggestions()',
      desc: 'پیشنهاد کاربران برای دنبال کردن.',
      code: 'suggests = await client.get_suggestions()'
    },
    {
      id: 'report-user',
      category: 'interactions',
      type: 'Request',
      name: 'report_user(user_id, abuse_category_id, description)',
      desc: 'گزارش تخلف کاربر.',
      code: 'await client.report_user("user_456", "spam", "تبلیغات")'
    },

    // ==================== SEARCH ====================
    {
      id: 'search-posts',
      category: 'search',
      type: 'Request',
      name: 'search_posts(query, method, hashtags)',
      desc: 'جستجوی پیشرفته پست‌ها.',
      code: 'res = await client.search_posts("python", method="latest")'
    },
    {
      id: 'get-topics',
      category: 'search',
      type: 'Request',
      name: 'get_topics()',
      desc: 'دریافت لیست موضوعات رسمی.',
      code: 'topics = await client.get_topics()'
    },
    {
      id: 'add-topic-to-post',
      category: 'search',
      type: 'Request',
      name: 'add_topic_to_post(post_id, topic_ids)',
      desc: 'افزودن موضوع به پست.',
      code: 'await client.add_topic_to_post("post_123", ["tech"])'
    },
    {
      id: 'remove-topic-from-post',
      category: 'search',
      type: 'Request',
      name: 'remove_topic_from_post(post_id, topic_id)',
      desc: 'حذف موضوع از پست.',
      code: 'await client.remove_topic_from_post("post_123", "tech")'
    },
    {
      id: 'get-short-links',
      category: 'search',
      type: 'Request',
      name: 'get_short_links(entity, entity_id)',
      desc: 'لیست لینک‌های کوتاه.',
      code: 'links = await client.get_short_links("post", "post_123")'
    },
    {
      id: 'create-short-link',
      category: 'search',
      type: 'Request',
      name: 'create_short_link(entity, entity_id, title)',
      desc: 'ایجاد لینک کوتاه.',
      code: 'link = await client.create_short_link("post", "post_123", "عنوان")'
    },
    {
      id: 'edit-short-link',
      category: 'search',
      type: 'Request',
      name: 'edit_short_link(short_link_id, title)',
      desc: 'ویرایش لینک کوتاه.',
      code: 'await client.edit_short_link("link_123", "عنوان جدید")'
    },
    {
      id: 'get-short-link-details',
      category: 'search',
      type: 'Request',
      name: 'get_short_link_details(short_link_id)',
      desc: 'جزئیات لینک کوتاه.',
      code: 'details = await client.get_short_link_details("link_123")'
    },
    {
      id: 'remove-short-link',
      category: 'search',
      type: 'Request',
      name: 'remove_short_link(short_link_id)',
      desc: 'حذف لینک کوتاه.',
      code: 'await client.remove_short_link("link_123")'
    },
    {
      id: 'get-og_data',
      category: 'search',
      type: 'Request',
      name: 'get_og_data(url)',
      desc: 'دریافت متادیتای OpenGraph از یک URL.',
      code: 'og = await client.get_og_data("https://virasty.com")'
    },

    // ==================== ACCOUNTING ====================
    {
      id: 'get-transactions',
      category: 'accounting',
      type: 'Request',
      name: 'get_transactions(action, currency)',
      desc: 'لیست تراکنش‌های مالی.',
      code: 'txs = await client.get_transactions()'
    },
    {
      id: 'add-fund',
      category: 'accounting',
      type: 'Request',
      name: 'add_fund(amount, currency, return_url)',
      desc: 'شارژ کیف پول.',
      code: 'pay = await client.add_fund(50000, "IRR")'
    },
    {
      id: 'get-active-livestreams',
      category: 'accounting',
      type: 'Request',
      name: 'get_active_livestreams()',
      desc: 'لیست لایوهای فعال.',
      code: 'live = await client.get_active_livestreams()'
    },
    {
      id: 'create-livestream',
      category: 'accounting',
      type: 'Request',
      name: 'create_livestream(quality, record_live)',
      desc: 'ایجاد لایو جدید.',
      code: 'config = await client.create_livestream(quality="1080")'
    }
  ]
};