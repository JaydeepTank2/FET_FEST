
//
// StyleDictionaryColor.h
//
// Do not edit directly
// Generated on Sat, 15 Jun 2019 10:51:09 GMT
//

#import <UIKit/UIKit.h>


typedef NS_ENUM(NSInteger, StyleDictionaryColorName) {
ColorBaseGrayLight,
ColorBaseGrayMedium,
ColorBaseGrayDark,
ColorBaseRed,
ColorBaseGreen,
ColorBaseWhite,
ColorBasePrimary,
ColorBaseSecondary,
ColorBaseTertiary,
ColorBaseSuccess,
ColorBaseWarning,
ColorBaseInfo,
ColorBaseDanger,
ColorFontPrimary,
ColorFontSecondary,
ColorFontTertiary,
ColorFontWhite
};

@interface StyleDictionaryColor : NSObject
+ (NSArray *)values;
+ (UIColor *)color:(StyleDictionaryColorName)color;
@end
