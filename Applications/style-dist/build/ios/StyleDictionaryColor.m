
//
// StyleDictionaryColor.m
//
// Do not edit directly
// Generated on Sat, 15 Jun 2019 10:51:09 GMT
//

#import "StyleDictionaryColor.h"


@implementation StyleDictionaryColor

+ (UIColor *)color:(StyleDictionaryColorName)colorEnum{
  return [[self values] objectAtIndex:colorEnum];
}

+ (NSArray *)values {
  static NSArray* colorArray;
  static dispatch_once_t onceToken;

  dispatch_once(&onceToken, ^{
    colorArray = @[
[UIColor colorWithRed:0.80f green:0.80f blue:0.80f alpha:1.00f],
[UIColor colorWithRed:0.31f green:0.31f blue:0.31f alpha:1.00f],
[UIColor colorWithRed:0.07f green:0.07f blue:0.07f alpha:1.00f],
[UIColor colorWithRed:1.00f green:0.00f blue:0.00f alpha:1.00f],
[UIColor colorWithRed:0.00f green:1.00f blue:0.00f alpha:1.00f],
[UIColor colorWithRed:1.00f green:1.00f blue:1.00f alpha:1.00f],
[UIColor colorWithRed:0.00f green:0.33f blue:0.55f alpha:1.00f],
[UIColor colorWithRed:0.00f green:0.69f blue:0.89f alpha:1.00f],
[UIColor colorWithRed:0.13f green:0.19f blue:0.30f alpha:1.00f],
[UIColor colorWithRed:0.80f green:0.85f blue:0.08f alpha:1.00f],
[UIColor colorWithRed:0.93f green:0.86f blue:0.00f alpha:1.00f],
[UIColor colorWithRed:1.00f green:0.72f blue:0.11f alpha:1.00f],
[UIColor colorWithRed:0.80f green:0.36f blue:0.24f alpha:1.00f],
[UIColor colorWithRed:0.07f green:0.07f blue:0.07f alpha:1.00f],
[UIColor colorWithRed:0.31f green:0.31f blue:0.31f alpha:1.00f],
[UIColor colorWithRed:0.80f green:0.80f blue:0.80f alpha:1.00f],
[UIColor colorWithRed:1.00f green:1.00f blue:1.00f alpha:1.00f]
    ];
  });

  return colorArray;
}

@end
