//
//  UserModule.m
//  AwesomeTSProject
//
//  Created by Knox on 2022/5/28.
//

#import "UserModule.h"
#import <React/RCTBridgeModule.h>

@interface UserModule ()<RCTBridgeModule>

@end


@implementation UserModule


/// 必须使用这个宏导出这个原生模块到rn
RCT_EXPORT_MODULE();


/// 使用 RCT_EXPORT_METHOD 把原生方法导出到js中,
/// 方法名称为OC方法的第一部分
/// 方法在子线程执行
RCT_EXPORT_METHOD(userDidUpdated:(NSDictionary *)info) {
  NSLog(@"%@ userDidUpdated - %@", [NSThread currentThread], info);
}


RCT_EXPORT_METHOD(getUserDetail:(NSString *)userAd resolve:(RCTPromiseResolveBlock)resolve reject:(RCTPromiseRejectBlock)reject) {
  if (userAd.length == 0) {
    NSString *code = @"404";
    NSString *message = @"UserAd is invalid";
    NSError *error = [NSError errorWithDomain:@"UserModule" code:100404 userInfo:@{@"description":@"参数错误"}];
    reject(code, message, error);
  } else {
    NSDictionary *info = @{
      @"id":userAd,
      @"name":@"Swift",
      @"age": @(19),
    };
    resolve(info);
  }
}


@end
