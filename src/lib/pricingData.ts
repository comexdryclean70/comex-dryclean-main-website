import { Shirt, Scissors, Briefcase, User, Sun, Snowflake, Crown, Sparkles, Star, Layers, Heart, Blinds, Armchair, Bed, BedDouble, Smile, Car, Package } from 'lucide-react';

export type PricingItem = {
    id: string;
    name: string;
    minPrice: number; // Used for calculator math
    displayPrice: string; // Used for UI display
    icon: any;
};

export const PRICING_DATA = {
    Men: [
        { id: 'm_pant', name: 'Pant', minPrice: 110, displayPrice: '₹110-150', icon: Scissors },
        { id: 'm_shirt', name: 'Shirt', minPrice: 100, displayPrice: '₹100-130', icon: Shirt },
        { id: 'm_suit2', name: 'Suit (2 Pcs)', minPrice: 350, displayPrice: '₹350-450', icon: Briefcase },
        { id: 'm_suit3', name: 'Suit (3 Pcs)', minPrice: 450, displayPrice: '₹450-600', icon: Briefcase },
        { id: 'm_coat', name: 'Coat/Jacket', minPrice: 250, displayPrice: '₹250-300', icon: User },
        { id: 'm_jacket_half', name: 'Jacket (Half)', minPrice: 180, displayPrice: '₹180-250', icon: User },
        { id: 'm_achakan', name: 'Achakan/Sherwani', minPrice: 350, displayPrice: '₹350-800', icon: Crown },
        { id: 'm_kurta_pajama', name: 'Kurta Pajama', minPrice: 250, displayPrice: '₹250-500', icon: Sun },
        { id: 'm_kurta', name: 'Kurta Only', minPrice: 150, displayPrice: '₹150-300', icon: Sun },
        { id: 'm_leather', name: 'Leather Jacket', minPrice: 400, displayPrice: '₹400-500', icon: User },
        { id: 'm_shawl', name: 'Shawl', minPrice: 150, displayPrice: '₹150-250', icon: Snowflake },
        { id: 'm_sweater', name: 'Sweater', minPrice: 150, displayPrice: '₹150-250', icon: Snowflake },
        { id: 'm_cap', name: 'Cap', minPrice: 50, displayPrice: '₹50-150', icon: Smile },
    ],
    Women: [
        { id: 'w_saree_cotton', name: 'Saree (Cotton)', minPrice: 200, displayPrice: '₹200-300', icon: Sparkles },
        { id: 'w_saree_fancy', name: 'Saree (Zari/Fancy)', minPrice: 250, displayPrice: '₹250-800', icon: Star },
        { id: 'w_saree_charak', name: 'Saree Charak', minPrice: 30, displayPrice: '₹30-50', icon: Sparkles },
        { id: 'w_suit2', name: 'Ladies Suit (2 Pcs)', minPrice: 250, displayPrice: '₹250-600', icon: Layers },
        { id: 'w_suit3', name: 'Ladies Suit (3 Pcs)', minPrice: 300, displayPrice: '₹300-1000', icon: Layers },
        { id: 'w_gown', name: 'Gown', minPrice: 350, displayPrice: '₹350-1000', icon: Crown },
        { id: 'w_lehenga', name: 'Lehenga Suit', minPrice: 350, displayPrice: '₹350-2000', icon: Heart },
        { id: 'w_sharara', name: 'Sharara Suit', minPrice: 350, displayPrice: '₹350-1000', icon: Layers },
        { id: 'w_blouse', name: 'Blouse', minPrice: 70, displayPrice: '₹70-200', icon: User },
        { id: 'w_skirt', name: 'Skirt', minPrice: 150, displayPrice: '₹150-300', icon: User },
        { id: 'w_frock', name: 'Frock', minPrice: 150, displayPrice: '₹150-500', icon: User },
    ],
    Kids: [
        { id: 'k_coat', name: 'Kid Coat', minPrice: 150, displayPrice: '₹150-300', icon: User },
        { id: 'k_suit', name: 'Kid Suit (2pc)', minPrice: 200, displayPrice: '₹200-400', icon: Briefcase },
        { id: 'k_frock', name: 'Girl Frock', minPrice: 100, displayPrice: '₹100-300', icon: Smile },
        { id: 'k_shirt', name: 'Kid Shirt/Pant', minPrice: 60, displayPrice: '₹60-90', icon: Shirt },
    ],
    Household: [
        { id: 'h_blanket_s', name: 'Blanket (Single)', minPrice: 250, displayPrice: '₹250-500', icon: Bed },
        { id: 'h_blanket_d', name: 'Blanket (Double)', minPrice: 300, displayPrice: '₹300-800', icon: BedDouble },
        { id: 'h_curtain', name: 'Curtain (Panel)', minPrice: 130, displayPrice: '₹130-200', icon: Blinds },
        { id: 'h_sofa', name: 'Sofa (Per Seat)', minPrice: 150, displayPrice: '₹150-500', icon: Armchair },
        { id: 'h_carpet', name: 'Carpet (Sq Ft)', minPrice: 15, displayPrice: '₹15-25', icon: Layers },
        { id: 'h_toy', name: 'Soft Toys', minPrice: 50, displayPrice: '₹50-500', icon: Smile },
        { id: 'h_car', name: 'Car Seat Cover', minPrice: 300, displayPrice: '₹300-800', icon: Car },
    ]
};
