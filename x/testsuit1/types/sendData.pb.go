// Code generated by protoc-gen-gogo. DO NOT EDIT.
// source: testsuit1/sendData.proto

package types

import (
	fmt "fmt"
	_ "github.com/gogo/protobuf/gogoproto"
	proto "github.com/gogo/protobuf/proto"
	io "io"
	math "math"
	math_bits "math/bits"
)

// Reference imports to suppress errors if they are not otherwise used.
var _ = proto.Marshal
var _ = fmt.Errorf
var _ = math.Inf

// This is a compile-time assertion to ensure that this generated file
// is compatible with the proto package it is being compiled against.
// A compilation error at this line likely means your copy of the
// proto package needs to be updated.
const _ = proto.GoGoProtoPackageIsVersion3 // please upgrade the proto package

type SendData struct {
	Index     string `protobuf:"bytes,2,opt,name=index,proto3" json:"index,omitempty"`
	DataIndex string `protobuf:"bytes,3,opt,name=dataIndex,proto3" json:"dataIndex,omitempty"`
	Data      string `protobuf:"bytes,4,opt,name=data,proto3" json:"data,omitempty"`
	Chain     string `protobuf:"bytes,5,opt,name=chain,proto3" json:"chain,omitempty"`
}

func (m *SendData) Reset()         { *m = SendData{} }
func (m *SendData) String() string { return proto.CompactTextString(m) }
func (*SendData) ProtoMessage()    {}
func (*SendData) Descriptor() ([]byte, []int) {
	return fileDescriptor_93bbd65fe07586dd, []int{0}
}
func (m *SendData) XXX_Unmarshal(b []byte) error {
	return m.Unmarshal(b)
}
func (m *SendData) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	if deterministic {
		return xxx_messageInfo_SendData.Marshal(b, m, deterministic)
	} else {
		b = b[:cap(b)]
		n, err := m.MarshalToSizedBuffer(b)
		if err != nil {
			return nil, err
		}
		return b[:n], nil
	}
}
func (m *SendData) XXX_Merge(src proto.Message) {
	xxx_messageInfo_SendData.Merge(m, src)
}
func (m *SendData) XXX_Size() int {
	return m.Size()
}
func (m *SendData) XXX_DiscardUnknown() {
	xxx_messageInfo_SendData.DiscardUnknown(m)
}

var xxx_messageInfo_SendData proto.InternalMessageInfo

func (m *SendData) GetIndex() string {
	if m != nil {
		return m.Index
	}
	return ""
}

func (m *SendData) GetDataIndex() string {
	if m != nil {
		return m.DataIndex
	}
	return ""
}

func (m *SendData) GetData() string {
	if m != nil {
		return m.Data
	}
	return ""
}

func (m *SendData) GetChain() string {
	if m != nil {
		return m.Chain
	}
	return ""
}

func init() {
	proto.RegisterType((*SendData)(nil), "user.chaina.testsuit1.SendData")
}

func init() { proto.RegisterFile("testsuit1/sendData.proto", fileDescriptor_93bbd65fe07586dd) }

var fileDescriptor_93bbd65fe07586dd = []byte{
	// 202 bytes of a gzipped FileDescriptorProto
	0x1f, 0x8b, 0x08, 0x00, 0x00, 0x00, 0x00, 0x00, 0x02, 0xff, 0xe2, 0x92, 0x28, 0x49, 0x2d, 0x2e,
	0x29, 0x2e, 0xcd, 0x2c, 0x31, 0xd4, 0x2f, 0x4e, 0xcd, 0x4b, 0x71, 0x49, 0x2c, 0x49, 0xd4, 0x2b,
	0x28, 0xca, 0x2f, 0xc9, 0x17, 0x12, 0x2d, 0x2d, 0x4e, 0x2d, 0xd2, 0x4b, 0xce, 0x48, 0xcc, 0xcc,
	0x4b, 0xd4, 0x83, 0xab, 0x92, 0x12, 0x49, 0xcf, 0x4f, 0xcf, 0x07, 0xab, 0xd0, 0x07, 0xb1, 0x20,
	0x8a, 0x95, 0x32, 0xb8, 0x38, 0x82, 0xa1, 0xda, 0x85, 0x44, 0xb8, 0x58, 0x33, 0xf3, 0x52, 0x52,
	0x2b, 0x24, 0x98, 0x14, 0x18, 0x35, 0x38, 0x83, 0x20, 0x1c, 0x21, 0x19, 0x2e, 0xce, 0x94, 0xc4,
	0x92, 0x44, 0x4f, 0xb0, 0x0c, 0x33, 0x58, 0x06, 0x21, 0x20, 0x24, 0xc4, 0xc5, 0x02, 0xe2, 0x48,
	0xb0, 0x80, 0x25, 0xc0, 0x6c, 0x90, 0x39, 0x60, 0xdb, 0x25, 0x58, 0x21, 0xe6, 0x80, 0x39, 0x4e,
	0x4e, 0x27, 0x1e, 0xc9, 0x31, 0x5e, 0x78, 0x24, 0xc7, 0xf8, 0xe0, 0x91, 0x1c, 0xe3, 0x84, 0xc7,
	0x72, 0x0c, 0x17, 0x1e, 0xcb, 0x31, 0xdc, 0x78, 0x2c, 0xc7, 0x10, 0xa5, 0x91, 0x9e, 0x59, 0x92,
	0x51, 0x9a, 0xa4, 0x97, 0x9c, 0x9f, 0xab, 0x0f, 0x72, 0xbb, 0x3e, 0xc4, 0xed, 0xfa, 0x15, 0xfa,
	0x08, 0x3f, 0x96, 0x54, 0x16, 0xa4, 0x16, 0x27, 0xb1, 0x81, 0x1d, 0x6d, 0x0c, 0x08, 0x00, 0x00,
	0xff, 0xff, 0x28, 0xa3, 0x87, 0xeb, 0xfd, 0x00, 0x00, 0x00,
}

func (m *SendData) Marshal() (dAtA []byte, err error) {
	size := m.Size()
	dAtA = make([]byte, size)
	n, err := m.MarshalToSizedBuffer(dAtA[:size])
	if err != nil {
		return nil, err
	}
	return dAtA[:n], nil
}

func (m *SendData) MarshalTo(dAtA []byte) (int, error) {
	size := m.Size()
	return m.MarshalToSizedBuffer(dAtA[:size])
}

func (m *SendData) MarshalToSizedBuffer(dAtA []byte) (int, error) {
	i := len(dAtA)
	_ = i
	var l int
	_ = l
	if len(m.Chain) > 0 {
		i -= len(m.Chain)
		copy(dAtA[i:], m.Chain)
		i = encodeVarintSendData(dAtA, i, uint64(len(m.Chain)))
		i--
		dAtA[i] = 0x2a
	}
	if len(m.Data) > 0 {
		i -= len(m.Data)
		copy(dAtA[i:], m.Data)
		i = encodeVarintSendData(dAtA, i, uint64(len(m.Data)))
		i--
		dAtA[i] = 0x22
	}
	if len(m.DataIndex) > 0 {
		i -= len(m.DataIndex)
		copy(dAtA[i:], m.DataIndex)
		i = encodeVarintSendData(dAtA, i, uint64(len(m.DataIndex)))
		i--
		dAtA[i] = 0x1a
	}
	if len(m.Index) > 0 {
		i -= len(m.Index)
		copy(dAtA[i:], m.Index)
		i = encodeVarintSendData(dAtA, i, uint64(len(m.Index)))
		i--
		dAtA[i] = 0x12
	}
	return len(dAtA) - i, nil
}

func encodeVarintSendData(dAtA []byte, offset int, v uint64) int {
	offset -= sovSendData(v)
	base := offset
	for v >= 1<<7 {
		dAtA[offset] = uint8(v&0x7f | 0x80)
		v >>= 7
		offset++
	}
	dAtA[offset] = uint8(v)
	return base
}
func (m *SendData) Size() (n int) {
	if m == nil {
		return 0
	}
	var l int
	_ = l
	l = len(m.Index)
	if l > 0 {
		n += 1 + l + sovSendData(uint64(l))
	}
	l = len(m.DataIndex)
	if l > 0 {
		n += 1 + l + sovSendData(uint64(l))
	}
	l = len(m.Data)
	if l > 0 {
		n += 1 + l + sovSendData(uint64(l))
	}
	l = len(m.Chain)
	if l > 0 {
		n += 1 + l + sovSendData(uint64(l))
	}
	return n
}

func sovSendData(x uint64) (n int) {
	return (math_bits.Len64(x|1) + 6) / 7
}
func sozSendData(x uint64) (n int) {
	return sovSendData(uint64((x << 1) ^ uint64((int64(x) >> 63))))
}
func (m *SendData) Unmarshal(dAtA []byte) error {
	l := len(dAtA)
	iNdEx := 0
	for iNdEx < l {
		preIndex := iNdEx
		var wire uint64
		for shift := uint(0); ; shift += 7 {
			if shift >= 64 {
				return ErrIntOverflowSendData
			}
			if iNdEx >= l {
				return io.ErrUnexpectedEOF
			}
			b := dAtA[iNdEx]
			iNdEx++
			wire |= uint64(b&0x7F) << shift
			if b < 0x80 {
				break
			}
		}
		fieldNum := int32(wire >> 3)
		wireType := int(wire & 0x7)
		if wireType == 4 {
			return fmt.Errorf("proto: SendData: wiretype end group for non-group")
		}
		if fieldNum <= 0 {
			return fmt.Errorf("proto: SendData: illegal tag %d (wire type %d)", fieldNum, wire)
		}
		switch fieldNum {
		case 2:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field Index", wireType)
			}
			var stringLen uint64
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowSendData
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				stringLen |= uint64(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			intStringLen := int(stringLen)
			if intStringLen < 0 {
				return ErrInvalidLengthSendData
			}
			postIndex := iNdEx + intStringLen
			if postIndex < 0 {
				return ErrInvalidLengthSendData
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			m.Index = string(dAtA[iNdEx:postIndex])
			iNdEx = postIndex
		case 3:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field DataIndex", wireType)
			}
			var stringLen uint64
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowSendData
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				stringLen |= uint64(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			intStringLen := int(stringLen)
			if intStringLen < 0 {
				return ErrInvalidLengthSendData
			}
			postIndex := iNdEx + intStringLen
			if postIndex < 0 {
				return ErrInvalidLengthSendData
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			m.DataIndex = string(dAtA[iNdEx:postIndex])
			iNdEx = postIndex
		case 4:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field Data", wireType)
			}
			var stringLen uint64
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowSendData
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				stringLen |= uint64(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			intStringLen := int(stringLen)
			if intStringLen < 0 {
				return ErrInvalidLengthSendData
			}
			postIndex := iNdEx + intStringLen
			if postIndex < 0 {
				return ErrInvalidLengthSendData
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			m.Data = string(dAtA[iNdEx:postIndex])
			iNdEx = postIndex
		case 5:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field Chain", wireType)
			}
			var stringLen uint64
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowSendData
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				stringLen |= uint64(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			intStringLen := int(stringLen)
			if intStringLen < 0 {
				return ErrInvalidLengthSendData
			}
			postIndex := iNdEx + intStringLen
			if postIndex < 0 {
				return ErrInvalidLengthSendData
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			m.Chain = string(dAtA[iNdEx:postIndex])
			iNdEx = postIndex
		default:
			iNdEx = preIndex
			skippy, err := skipSendData(dAtA[iNdEx:])
			if err != nil {
				return err
			}
			if (skippy < 0) || (iNdEx+skippy) < 0 {
				return ErrInvalidLengthSendData
			}
			if (iNdEx + skippy) > l {
				return io.ErrUnexpectedEOF
			}
			iNdEx += skippy
		}
	}

	if iNdEx > l {
		return io.ErrUnexpectedEOF
	}
	return nil
}
func skipSendData(dAtA []byte) (n int, err error) {
	l := len(dAtA)
	iNdEx := 0
	depth := 0
	for iNdEx < l {
		var wire uint64
		for shift := uint(0); ; shift += 7 {
			if shift >= 64 {
				return 0, ErrIntOverflowSendData
			}
			if iNdEx >= l {
				return 0, io.ErrUnexpectedEOF
			}
			b := dAtA[iNdEx]
			iNdEx++
			wire |= (uint64(b) & 0x7F) << shift
			if b < 0x80 {
				break
			}
		}
		wireType := int(wire & 0x7)
		switch wireType {
		case 0:
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return 0, ErrIntOverflowSendData
				}
				if iNdEx >= l {
					return 0, io.ErrUnexpectedEOF
				}
				iNdEx++
				if dAtA[iNdEx-1] < 0x80 {
					break
				}
			}
		case 1:
			iNdEx += 8
		case 2:
			var length int
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return 0, ErrIntOverflowSendData
				}
				if iNdEx >= l {
					return 0, io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				length |= (int(b) & 0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			if length < 0 {
				return 0, ErrInvalidLengthSendData
			}
			iNdEx += length
		case 3:
			depth++
		case 4:
			if depth == 0 {
				return 0, ErrUnexpectedEndOfGroupSendData
			}
			depth--
		case 5:
			iNdEx += 4
		default:
			return 0, fmt.Errorf("proto: illegal wireType %d", wireType)
		}
		if iNdEx < 0 {
			return 0, ErrInvalidLengthSendData
		}
		if depth == 0 {
			return iNdEx, nil
		}
	}
	return 0, io.ErrUnexpectedEOF
}

var (
	ErrInvalidLengthSendData        = fmt.Errorf("proto: negative length found during unmarshaling")
	ErrIntOverflowSendData          = fmt.Errorf("proto: integer overflow")
	ErrUnexpectedEndOfGroupSendData = fmt.Errorf("proto: unexpected end of group")
)