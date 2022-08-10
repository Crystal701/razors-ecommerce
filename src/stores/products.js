import { writable } from "svelte/store";

export const products = writable([
    {
        id: 1,
        title: "Razor Blade",
        price: 1.99,
        description:
            "Double Edge Safety Razor Blades Replacement Old Fashion Men's and Women's Safety Razor Stainless Steel Blades for Shaving. Product use: eyebrow trimming, hair trimming, hair trimming, shaving. You can use this blade instead of an electric shaver. Natural and comfortable. It is easy to rust in a humid environment for a long time, and it should be wiped dry after use to keep the razor dry. Note: If you hold this blade by hand, you must be careful, the blade is relatively sharp.",
        featured: true,
        created_at: "2019-10-27T21:38:58.014Z",
        updated_at: "2019-10-27T22:52:25.274Z",
        image: {
            id: 1,
            name: "product-1.png",
            hash: "4fd71e9608434f87bc9529b8a71b1de5",
            sha256: "Lr1IhG6PdCbYB-mQejx3dx5WyJ4mp0qLR_ui3E5agYM",
            ext: ".png",
            mime: "image/png",
            size: "94.63",
            url: "/product-1.png",
            provider: "local",
            provider_metadata: null,
            created_at: "2019-10-27T21:38:58.043Z",
            updated_at: "2019-10-27T21:38:58.043Z"
        }
    },
    {
        id: 2,
        title: "Gillette Razor",
        price: 9.99,
        description:
            "Comfortable shave - comfort strip Comfort Strip with lubricants and a touch of aloe gives a more comfortable shave. Comfort strip releases lubricating substances with a touch of aloe that makes the razor glide smoothly across your face which lessens skin irritation and gives you a smoother and more comfortable shave. Clean shave - two blades A system with twin blades specially angled to give you a close shave and reduce the probability of nicks, cuts and missed spots.",
        featured: null,
        created_at: "2019-10-27T21:39:45.612Z",
        updated_at: "2019-10-27T22:52:06.354Z",
        image: {
            id: 2,
            name: "product-2.png",
            hash: "2cc56db3bcb54350b84002691ab319f3",
            sha256: "hYYdYDNGw6TxLbcG1H-WDZaTqRp-Oi4K4WRdAN91ZAs",
            ext: ".png",
            mime: "image/png",
            size: "22.99",
            url: "/product-2.png",
            provider: "local",
            provider_metadata: null,
            created_at: "2019-10-27T21:39:45.628Z",
            updated_at: "2019-10-27T21:39:45.628Z"
        }
    },
    {
        id: 3,
        title: "Barber Razor",
        price: 7.99,
        description:
            "Barber Straight Razor, Professional Barber Straight Edge Razor - This straight edge razor causes less vibration from the razor edge while shaving. It also provides the perfect balance in your hand for easy maneuvering. The proper, balanced weight distribution prevents strain on the wrist; feels great in the hand. The single edge barber razor features an armature swing lock design for secure edge insertion; created with thumb notch and ridges for extra control for preventing the razor to slip, which is most crucial when doing close shave.",
        featured: null,
        created_at: "2019-10-28T00:57:44.490Z",
        updated_at: "2019-10-28T00:57:44.490Z",
        image: {
            id: 3,
            name: "product-3.png",
            hash: "fab437959bd442518f19cf3a42d2a96a",
            sha256: "rRWmzg-R6dXlJY8_reZtZXXa9w9Qb1qLMTlMRLS7SW0",
            ext: ".png",
            mime: "image/png",
            size: "19.45",
            url: "/product-3.png",
            provider: "local",
            provider_metadata: null,
            created_at: "2019-10-28T00:57:44.511Z",
            updated_at: "2019-10-28T00:57:44.511Z"
        }
    },
    {
        id: 4,
        title: "Electric Razor",
        price: 20.99,
        description:
            "This Electric Razor is the world's most efficient electric shaver, now better with a flexible new ProHead that can cut 1, 3 or 7-day beards even in tricky areas. The innovative ProLift trimmer captures and cuts flat lying hair, with Braun's unique Sonic Technology that helps to shave up to 10% faster and navigate tricky areas such as upper lip and neck for a supremely close yet gentle shave. Powerful Li-Ion battery that lasts up to a month. 5 minute quick charge for one shave",
        featured: null,
        created_at: "2019-10-28T01:36:25.217Z",
        updated_at: "2019-10-28T01:36:25.217Z",
        image: {
            id: 4,
            name: "product-4.png",
            hash: "0f9f9e052cdb4d0e968abbb912288af8",
            sha256: "NV87SgCwSqJbCVqauxRrJjaa86iEoUuYhlXYtOl1oFU",
            ext: ".png",
            mime: "image/png",
            size: "19.83",
            url: "/product-4.png",
            provider: "local",
            provider_metadata: null,
            created_at: "2019-10-28T01:36:25.229Z",
            updated_at: "2019-10-28T01:36:25.229Z"
        }
    },
    {
        id: 5,
        title: "Vintage Razor",
        price: 33.99,
        description:
            "Elegant, functional and designed to give a perfected performance, the Vintage Razor features an effective blade for a super smooth, irritation free shave. Created with a carved handle, this unique razor exudes classic, timeless style. Hand made, it boasts the perfect weight to ensure the right amount of pressure is applied to the skin when shaving. You'll be left with smooth skin and the closest shave.",
        featured: null,
        created_at: "2019-10-28T19:46:08.939Z",
        updated_at: "2019-10-28T19:46:08.939Z",
        image: {
            id: 5,
            name: "product-5.png",
            hash: "86a5e581cf0143a6ada9a437093aebfb",
            sha256: "Dm6OwRAp4murQgQ1KUagkDVxDwt7KZj58EjeO-VPUOE",
            ext: ".png",
            mime: "image/png",
            size: "24.80",
            url: "/product-5.png",
            provider: "local",
            provider_metadata: null,
            created_at: "2019-10-28T19:46:08.964Z",
            updated_at: "2019-10-28T19:46:08.964Z"
        }
    },
    {
        id: 6,
        title: "Gillette Orange Razor",
        price: 12.99,
        description:
            "Fusion5's antifriction blades shave with maximum comfort at a great price - and refills last up to 20 shaves. The soft microfins before the blades stretch and smooth skin to prepare your skin for a smooth shave, while the Lubrastrip makes sure the blades glide across your skin easily. Plus, you can use it to shape your facial hair. The Fusion5's easy-to-grip handle gives you complete control, even with wet hands.",
        featured: true,
        created_at: "2019-10-28T19:58:34.104Z",
        updated_at: "2019-10-28T19:58:34.104Z",
        image: {
            id: 6,
            name: "product-6.png",
            hash: "ab465a7ab2f4464b86b2e9b82c45addb",
            sha256: "HPr1b8is5yGhwQQJd1PUBK_m-mEw3wpCoXP4QyIepLo",
            ext: ".png",
            mime: "image/png",
            size: "15.27",
            url: "/product-6.png",
            provider: "local",
            provider_metadata: null,
            created_at: "2019-10-28T19:58:34.119Z",
            updated_at: "2019-10-28T19:58:34.119Z"
        }
    },
    {
        id: 7,
        title: "Gillette Blue Razor",
        price: 17.99,
        description:
            "Gillette Blue Disposable men's razor offers a smoother #shave and has 100% better rinsing (vs. Blue II Plus). It features an Enhanced Lubrastrip for extraordinary comfort (vs. Blue II Plus). A Pivoting Head adjusts to the contours of your face. Complete with a #Soft #Ultragrip handle for great control. Warnings: Please do not move the razor horizontally or touch the blade-edge with hand to avoid cut. Keep out of reach of children. Do not touch the blade-edge with hand in order to avoid cuts.",
        featured: true,
        created_at: "2019-10-28T20:09:56.444Z",
        updated_at: "2019-10-28T20:09:56.444Z",
        image: {
            id: 7,
            name: "product-7.png",
            hash: "5a120cff57d24ad184b949b9235097b2",
            sha256: "FEvujME4KbZKGz8lDSkND_7QUXud0BO38yIPY5KMRwI",
            ext: ".png",
            mime: "image/png",
            size: "18.50",
            url: "/product-7.png",
            provider: "local",
            provider_metadata: null,
            created_at: "2019-10-28T20:09:56.461Z",
            updated_at: "2019-10-28T20:09:56.461Z"
        }
    },
    {
        id: 8,
        title: "Old School Razor",
        price: 40.99,
        description:
            "A vintage-lovers must-have, now with a modern twist. The Old School Straight Razor is a precise, stylish tool to incorporate into your male grooming routine. While the trendy open razor may look cool, the easy-to-change blades make it even cooler. No need to sharpen dull blades, just swap in your usual stainless-steel replacements as needed. Enjoy the thrill of a close shave without any hassle.",
        featured: null,
        created_at: "2019-10-28T20:10:40.850Z",
        updated_at: "2019-10-28T20:10:40.850Z",
        image: {
            id: 8,
            name: "product-8.png",
            hash: "a3b34b9b4aab4e23b816a2ce05da01d9",
            sha256: "iFN9i6Z6kXHJ--4e64wSN-td4R-Wb-wHY8OMLvhBQzo",
            ext: ".png",
            mime: "image/png",
            size: "19.36",
            url: "/product-8.png",
            provider: "local",
            provider_metadata: null,
            created_at: "2019-10-28T20:10:40.863Z",
            updated_at: "2019-10-28T20:10:40.863Z"
        }
    },
    {
        id: 9,
        title: "Panasonic Electric Shaver",
        price: 24.99,
        description:
            "Excellent dry use or refreshing wet shaving. Washable / Easy to wash directly with water. Multi-Flex 5D Head. 5-Blade Cutting System with New Comb Blade. Convenient multi-LED indicator. Smart lock function locks the power switch automatically and release the switch lock when you grip the shaver.",
        featured: true,
        created_at: "2019-10-28T20:12:30.375Z",
        updated_at: "2019-10-28T20:26:12.927Z",
        image: {
            id: 9,
            name: "product-9.png",
            hash: "ac98629e1b474d2b89f3ad8e4d3bbcb0",
            sha256: "G9rriv6IvzwvPE101J1aO9iGNjNVZu3CXmthgDCgYmY",
            ext: ".png",
            mime: "image/png",
            size: "19.73",
            url: "/product-9.png",
            provider: "local",
            provider_metadata: null,
            created_at: "2019-10-28T20:12:30.387Z",
            updated_at: "2019-10-28T20:12:30.387Z"
        }
    }
])